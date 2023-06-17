// import "./index.css";
import Card from "../components/Card.js";
import Section from '../components/Section.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import {
  initialCards,
  cardListSelector,
  popupList,
  openBtnPopupEdit,
  openBtnPopupAdd,
  profileSelectors,
  validationConfig
} from "../utils/constants.js";
import Api from "../components/Api.js";

//Функция-колбэк обработки открытия изображения карточки
const handleCardClick = (name, link) => {
  popupImageInstance.open(name, link);
};

//Функция-колбэк создания и размещенеия карточки
const createCard = (item) => {
  const card = new Card(item, '.card-template', handleCardClick);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

//Функции-колбэк обработки отправки форм
const handleFormSubmitEdit = (formValues) => {
  const {
    'name-input': name,
    'description-input': description
  } = formValues;
  profileInfoInstance.setUserInfo(name, description);

  popupEditInstance.close();
}

const handleFormSubmitAdd = (formValues) => {
  const {
    'name-image-input': nameImage,
    'link-input': linkImage
  } = formValues;
  createCard({ name: nameImage, link: linkImage });

  popupAddInstance.close();

  formValidators['add-form'].resetValidation();
}

//Функции-колбэк обработки открытия модальных окон
const handleOpenPopupEdit = (inputList) => {
  formValidators['profile-form'].resetValidation();

  const profileInfoObject = profileInfoInstance.getUserInfo();
  inputList[0].value = profileInfoObject.name;
  inputList[1].value = profileInfoObject.description;
}

const handleOpenPopupAdd = () => {
  formValidators['add-form'].resetValidation();
}

//Создание экземпляров класса
const cardList = new Section({
  renderer: createCard
}, cardListSelector);
cardList.renderItems(initialCards);

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

Promise.all([
  apiInstance.getUserInfo(),
  apiInstance.getInitialCards()
])
.then(([dataUser, dataCards]) => {
  console.log(dataUser);
  console.log(dataCards);
  const {
    name: name,
    about: description,
    avatar: avatarLink
  } = dataUser;
  profileInfoInstance.setUserInfo(name, description, avatarLink);
})
.catch (err => console.error(`Ошибка: ${err}`));
