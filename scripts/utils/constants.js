export const initialCards = [
  {
    name: 'Рускеала',
    link: './images/photo-place-ruskeala.jpg'
  },
  {
    name: 'Гора Большой Бермамыт',
    link: './images/photo-place-bolshoi-bermamyt.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/photo-place-elbrus.jpg'
  },
  {
    name: 'Чусовая',
    link: './images/photo-place-chusovaya.jpg'
  },
  {
    name: 'Сулакский каньон',
    link: './images/photo-place-sulakskii-kanyon.jpg'
  },
  {
    name: 'Архыз',
    link: './images/photo-place-arhyz.jpg'
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
