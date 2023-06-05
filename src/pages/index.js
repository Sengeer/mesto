import "./index.css";
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

//Функция-колбэк обработки открытия модальных окон
const handleOpenPopup = (popupSelector, inputList) => {
  if (popupSelector.classList[1] === 'popup_modal-type_edit') {
    formValidators['profile-form'].resetValidation();

    const profileInfoObject = profileInfoInstance.getUserInfo();
    inputList[0].value = profileInfoObject.name;
    inputList[1].value = profileInfoObject.description;

  } else if (popupSelector.classList[1] === 'popup_modal-type_add') {
    formValidators['add-form'].resetValidation();
  };
}

//Создание экземпляров класса
const cardList = new Section({
  renderer: createCard
}, cardListSelector);
cardList.renderItems(initialCards);

const popupEditInstance = new PopupWithForm(
  popupList.popupEditSelector,
  handleFormSubmitEdit,
  null,
  handleOpenPopup);
popupEditInstance.setEventListeners();

const popupAddInstance = new PopupWithForm(
  popupList.popupAddSelector,
  null,
  handleFormSubmitAdd,
  handleOpenPopup);
popupAddInstance.setEventListeners();

const popupImageInstance = new PopupWithImage(
  popupList.popupImageSelector);
popupImageInstance.setEventListeners();

const profileInfoInstance = new UserInfo(profileSelectors);

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
