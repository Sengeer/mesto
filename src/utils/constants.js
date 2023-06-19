export const cardListSelector = '.photo-place__elements';

export const popupList = {
  popupEditSelector: '.popup_modal-type_edit',
  popupAddSelector: '.popup_modal-type_add',
  popupImageSelector: '.popup_modal-type_image',
  popupAvatarSelector: '.popup_modal-type_avatar',
  popupConfirmSelector: '.popup_modal-type_confirm'
};

export const profileSelectors = {
  nameSelector: '.profile__name',
  descriptionSelector: '.profile__description',
  avatarSelector: '.profile__avatar'
};

export const openBtnPopupEdit = document.querySelector('.profile__edit-btn');
export const openBtnPopupAdd = document.querySelector('.profile__add-btn');
export const openBtnPopupAvatar = document.querySelector('.profile__avatar-btn');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  activeErrorClass: 'popup__text-error_active'
};
