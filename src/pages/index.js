// import "./index.css";
import Card from "../components/Card.js";
import Section from '../components/Section.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import {
  cardListSelector,
  popupList,
  openBtnPopupEdit,
  openBtnPopupAdd,
  openBtnPopupAvatar,
  profileSelectors,
  validationConfig
} from "../utils/constants.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

//Обработчик ошибок
const errorHandler = (err) => {
  console.error(`Ошибка! Статус: ${err.status} // URL: ${err.url}`);
}

//Функция-колбэк обработки открытия изображения карточки
const handleCardClick = (name, link) => {
  popupImage.open(name, link);
};

//Функция-колбэк создания, размещенеия карточки и её функционала
const createCard = (item) => {
  const card = new Card(
    item,
    '.card-template',
    handleCardClick,
    {
      handleOpenPopupDelete: (card, cardId) => {
        popupConfirm.open(card, cardId);
      },
      handleLikeClick: (likeButton, cardId) => {
        if (likeButton.classList.contains('photo-place__like-btn_active')) {
          api.removeCardLike(cardId)
            .then(resCardData => {
              card.toggleLike(resCardData.likes);
            })
            .catch(err => errorHandler(err))
        } else {
          api.addCardLike(cardId)
            .then(resCardData => {
              card.toggleLike(resCardData.likes);
            })
            .catch(err => errorHandler(err))
        };
      }
    });
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
};

//Функции-колбэк обработки отправки форм
const handleFormSubmitEdit = (formValues) => {
  api.patchUserInfo({
    name: formValues.name,
    description: formValues.description
  })
    .then(resMyUserData => {
      profileInfo.setUserInfo(
        resMyUserData.name,
        resMyUserData.about,
        resMyUserData.avatar,
        resMyUserData._id
      );

      formValidators['profile-form'].disableSubmitButton();

      popupEdit.close();
    })
    .catch(err => errorHandler(err))
    .finally(() => popupEdit.addDefaultTextSubmitButton());
};

const handleFormSubmitAdd = (formValues) => {
  api.addNewCard({
    name: formValues.image,
    link: formValues.link
  })
    .then((resCardData) => {
      resCardData.myId = profileInfo.getMyId();

      createCard(resCardData);

      formValidators['add-form'].disableSubmitButton();

      popupAdd.close();
    })
    .catch(err => errorHandler(err))
    .finally(() => popupAdd.addDefaultTextSubmitButton());
};

const handleFormSubmitAvatar = (formValues) => {
  api.patchUserInfo({ avatarLink: formValues.link })
    .then(resMyUserData => {
      profileInfo.setUserInfo(
        resMyUserData.name,
        resMyUserData.about,
        resMyUserData.avatar,
        resMyUserData._id
      );

      formValidators['avatar-form'].disableSubmitButton();

      popupAvatar.close();
    })
    .catch(err => errorHandler(err))
    .finally(() => popupAvatar.addDefaultTextSubmitButton());
};

const handleFormSubmitConfirm = (card, cardId) => {
  api.deleteCard(cardId)
    .then(() => {
      card.removeCard();
      popupConfirm.close();
    })
    .catch(err => errorHandler(err))
};

//Функции-колбэк обработки открытия модальных окон
const handleOpenPopupEdit = (inputList) => {
  const profileInfoObject = profileInfo.getUserInfo();
  inputList[0].value = profileInfoObject.name;
  inputList[1].value = profileInfoObject.description;

  formValidators['profile-form'].resetValidation();
};

const handleOpenPopupAdd = () => {
  formValidators['add-form'].resetValidation();
};

const handleOpenPopupAvatar = () => {
  formValidators['avatar-form'].resetValidation();
};

//Создание экземпляров класса
const cardList = new Section({
  renderer: createCard
}, cardListSelector);

const popupEdit = new PopupWithForm(
  popupList.popupEditSelector,
  {
    handleFormSubmit: handleFormSubmitEdit,
    handleOpenPopup: handleOpenPopupEdit
  });
popupEdit.setEventListeners();

const popupAdd = new PopupWithForm(
  popupList.popupAddSelector,
  {
    handleFormSubmit: handleFormSubmitAdd,
    handleOpenPopup: handleOpenPopupAdd
  });
popupAdd.setEventListeners();

const popupImage = new PopupWithImage(
  popupList.popupImageSelector);
popupImage.setEventListeners();

const popupAvatar = new PopupWithForm(
  popupList.popupAvatarSelector,
  {
    handleFormSubmit: handleFormSubmitAvatar,
    handleOpenPopup: handleOpenPopupAvatar
  });
popupAvatar.setEventListeners();

const popupConfirm = new PopupWithConfirmation(
  popupList.popupConfirmSelector,
  {
    handleFormSubmit: handleFormSubmitConfirm,
  });
  popupConfirm.setEventListeners();

const profileInfo = new UserInfo(profileSelectors);

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: '8eb2c5a1-7216-4743-9490-cbf6391354bb',
    'Content-Type': 'application/json'
  }
});

// Слушатели для кнопок открытия модальных окон
openBtnPopupEdit.addEventListener('click',
  popupEdit.open.bind(popupEdit));

openBtnPopupAdd.addEventListener('click',
  popupAdd.open.bind(popupAdd));

openBtnPopupAvatar.addEventListener('click',
  popupAvatar.open.bind(popupAvatar));

// Создание экземпляров класса лайв-валидации
const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))

  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);

// Первичные запросы
Promise.all([
  api.getUserInfo(),
  api.getInitialCards()
])
  .then(([resMyUserData, resCardsData]) => {
    profileInfo.setUserInfo(
      resMyUserData.name,
      resMyUserData.about,
      resMyUserData.avatar,
      resMyUserData._id
    );

    const reverseCardsArr = resCardsData.reverse();

    reverseCardsArr.forEach(item => item.myId = resMyUserData._id);

    cardList.renderItems(reverseCardsArr);
  })
  .catch(err => errorHandler(err));
