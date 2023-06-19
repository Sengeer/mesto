import "./index.css";
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

//Функция обработки асинхронных запросов
const handleAsynchRequests = (promisesArray) => {
  Promise.all(promisesArray)
    .then(([resMyUserData, resCardsData]) => {
      profileInfoInstance.setUserInfo(
        resMyUserData.name,
        resMyUserData.about,
        resMyUserData.avatar
      );

      if (Array.isArray(resCardsData)) {
        const reverseCardsArr = resCardsData.reverse();
        reverseCardsArr.forEach(item => item.myId = resMyUserData._id);
        cardList.renderItems(reverseCardsArr);
      } else {
        const cardData = resCardsData;
        cardData.myId = resMyUserData._id;
        createCard(cardData);
        popupAddInstance.close();
      };
    })
    .catch(err => errorHandler(err))
    .finally(() => popupAddInstance.addDefaultTextSubmitButton());
};

//Функция-колбэк обработки открытия изображения карточки
const handleCardClick = (name, link) => {
  popupImageInstance.open(name, link);
};

//Функция-колбэк создания, размещенеия карточки и её функционала
const createCard = (item) => {
  const card = new Card(
    item,
    '.card-template',
    handleCardClick,
    {
      handleOpenPopupDelete: (card, cardId) => {
        popupConfirmInstance.open(card, cardId);
      },
      handleLikeClick: (likeButton, cardId) => {
        if (likeButton.classList.contains('photo-place__like-btn_active')) {
          apiInstance.removeCardLike(cardId)
            .then(resCardData => {
              card.toggleLike(resCardData.likes);
            })
            .catch(err => errorHandler(err))
        } else {
          apiInstance.addCardLike(cardId)
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
  apiInstance.patchUserInfo({
    name: formValues.name,
    description: formValues.description
  })
    .then(resMyUserData => {
      profileInfoInstance.setUserInfo(
        resMyUserData.name,
        resMyUserData.about,
        resMyUserData.avatar
      );
      popupEditInstance.close();
    })
    .catch(err => errorHandler(err))
    .finally(() => popupEditInstance.addDefaultTextSubmitButton());

  formValidators['profile-form'].disableSubmitButton();
};

const handleFormSubmitAdd = (formValues, evt) => {
  evt.preventDefault();

  handleAsynchRequests([
    apiInstance.getUserInfo(),
    apiInstance.addNewCard({
      name: formValues.image,
      link: formValues.link
    })
  ]);

  formValidators['add-form'].disableSubmitButton();
};

const handleFormSubmitAvatar = (formValues) => {
  apiInstance.patchUserInfo({ avatarLink: formValues.link })
    .then(resMyUserData => {
      profileInfoInstance.setUserInfo(
        resMyUserData.name,
        resMyUserData.about,
        resMyUserData.avatar
      );
      popupAvatarInstance.close();
    })
    .catch(err => errorHandler(err))
    .finally(() => popupAvatarInstance.addDefaultTextSubmitButton());

  formValidators['avatar-form'].disableSubmitButton();
};

const handleFormSubmitConfirm = (card, cardId) => {
  apiInstance.deleteCard(cardId)
    .then(() => {
      card.removeCard();
      popupConfirmInstance.close();
    })
    .catch(err => errorHandler(err))
    .finally();
};

//Функции-колбэк обработки открытия модальных окон
const handleOpenPopupEdit = (inputList) => {
  const profileInfoObject = profileInfoInstance.getUserInfo();
  inputList[0].value = profileInfoObject.name;
  inputList[1].value = profileInfoObject.description;

  formValidators['profile-form'].resetValidation();
};

const handleOpenPopupAdd = () => {
  formValidators['add-form'].resetValidation();
};

const handleOpenPopupAvatar = (inputList) => {
  const profileAvatarObject = profileInfoInstance.getUserInfo();
  inputList[0].value = profileAvatarObject.avatar;

  formValidators['avatar-form'].resetValidation();
};

//Создание экземпляров класса
const cardList = new Section({
  renderer: createCard
}, cardListSelector);

const popupEditInstance = new PopupWithForm(
  popupList.popupEditSelector,
  {
    handleFormSubmit: handleFormSubmitEdit,
    handleOpenPopup: handleOpenPopupEdit
  });
popupEditInstance.setEventListeners();

const popupAddInstance = new PopupWithForm(
  popupList.popupAddSelector,
  {
    handleFormSubmit: handleFormSubmitAdd,
    handleOpenPopup: handleOpenPopupAdd
  });
popupAddInstance.setEventListeners();

const popupImageInstance = new PopupWithImage(
  popupList.popupImageSelector);
popupImageInstance.setEventListeners();

const popupAvatarInstance = new PopupWithForm(
  popupList.popupAvatarSelector,
  {
    handleFormSubmit: handleFormSubmitAvatar,
    handleOpenPopup: handleOpenPopupAvatar
  });
popupAvatarInstance.setEventListeners();

const popupConfirmInstance = new PopupWithConfirmation(
  popupList.popupConfirmSelector,
  {
    handleFormSubmit: handleFormSubmitConfirm,
  });
  popupConfirmInstance.setEventListeners();

const profileInfoInstance = new UserInfo(profileSelectors);

const apiInstance = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: '8eb2c5a1-7216-4743-9490-cbf6391354bb',
    'Content-Type': 'application/json'
  }
});

// Слушатели для кнопок открытия модальных окон
openBtnPopupEdit.addEventListener('click',
  popupEditInstance.open.bind(popupEditInstance));

openBtnPopupAdd.addEventListener('click',
  popupAddInstance.open.bind(popupAddInstance));

openBtnPopupAvatar.addEventListener('click',
  popupAvatarInstance.open.bind(popupAvatarInstance));

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
handleAsynchRequests([
  apiInstance.getUserInfo(),
  apiInstance.getInitialCards()
]);
