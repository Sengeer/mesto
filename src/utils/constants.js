
const ruskealaImage = new URL('../images/photo-place-ruskeala.jpg', import.meta.url);
const bermamytImage = new URL('../images/photo-place-bolshoi-bermamyt.jpg', import.meta.url);
const elbrusImage = new URL('../images/photo-place-elbrus.jpg', import.meta.url);
const chusovayaImage = new URL('../images/photo-place-chusovaya.jpg', import.meta.url);
const sulakskiiImage = new URL('../images/photo-place-sulakskii-kanyon.jpg', import.meta.url);
const arhyzImage = new URL('../images/photo-place-arhyz.jpg', import.meta.url);

export const initialCards = [
  {
    name: 'Рускеала',
    link: ruskealaImage
  },
  {
    name: 'Гора Большой Бермамыт',
    link: bermamytImage
  },
  {
    name: 'Гора Эльбрус',
    link: elbrusImage
  },
  {
    name: 'Чусовая',
    link: chusovayaImage
  },
  {
    name: 'Сулакский каньон',
    link: sulakskiiImage
  },
  {
    name: 'Архыз',
    link: arhyzImage
  }
];

export const cardListSelector = '.photo-place__elements';

export const popupList = {
  popupEditSelector: '.popup_modal-type_edit',
  popupAddSelector: '.popup_modal-type_add',
  popupImageSelector: '.popup_modal-type_image'
}

export const profileSelectors = {
  nameSelector: '.profile__name',
  descriptionSelector: '.profile__description'
}

export const openBtnPopupEdit = document.querySelector('.profile__edit-btn');
export const openBtnPopupAdd = document.querySelector('.profile__add-btn');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  activeErrorClass: 'popup__text-error_active'
};
