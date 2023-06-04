import Card from "../components/Card.js";
import Section from '../components/Section.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { formValidators } from "../components/FormValidator.js";
import {
  initialCards,
  cardListSelector,
  popupList,
  openBtnPopupEdit,
  openBtnPopupAdd,
  profileSelectors
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

//Функция-колбэк обработки отправки формы
const handleFormSubmit = (evt, inputList) => {
  if (evt.target.classList[1] === 'popup__form_modal-type_edit') {
    profileInfoInstance.setUserInfo(inputList[0].value, inputList[1].value);

    popupEditInstance.close();
  } else if (evt.target.classList[1] === 'popup__form_modal-type_add') {
    const newObject = { name: inputList[0].value, link: inputList[1].value };

    createCard(newObject);

    popupAddInstance.close();

    formValidators['add-form'].resetValidation();
  };
}

//Функция-колбэк обработки закрытия модальных окон
const handleClosePopup = (popupSelector, inputList) => {
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
  items: initialCards,
  renderer: createCard
}, cardListSelector);
cardList.renderItems();

const popupEditInstance = new PopupWithForm(
  popupList.popupEditSelector,
  handleFormSubmit,
  handleClosePopup);
popupEditInstance.setEventListeners();

const popupAddInstance = new PopupWithForm(
  popupList.popupAddSelector,
  handleFormSubmit,
  handleClosePopup);
popupAddInstance.setEventListeners();

const popupImageInstance = new PopupWithImage(
  popupList.popupImageSelector);
popupImageInstance.setEventListeners();

const profileInfoInstance = new UserInfo(profileSelectors);

// Слушатели для кнопок модальных окон
openBtnPopupEdit.addEventListener('click',
  popupEditInstance.open.bind(popupEditInstance));
openBtnPopupAdd.addEventListener('click',
  popupAddInstance.open.bind(popupAddInstance));
