import { initialCards } from "./constants.js";

// Обработка редактирования профиля
const popupEdit = document.querySelector('.popup_modal-type_edit');

const openBtnPopupEdit = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const formElementPopupEdit = popupEdit.querySelector('.popup__form_modal-type_edit');
const nameInput = formElementPopupEdit.querySelector('.popup__input_modal-type_name');
const descriptionInput = formElementPopupEdit.querySelector('.popup__input_modal-type_description');

const handleOpenPopupEdit = () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;

  openPopup(popupEdit);
};

function handleFormSubmitPopupEdit (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closePopup(popupEdit);
};

// Создание карточки / функционал карточки
const imageTemplate = document.querySelector('.card-template');
const imageContainer = document.querySelector('.photo-place__elements');

const createImageElement = function (imageData) {
  const cardElement = imageTemplate.content.querySelector('.photo-place__element').cloneNode(true);

  const imageElement = cardElement.querySelector('.photo-place__image');
  const titleElement = cardElement.querySelector('.photo-place__title');
  const likeBtnElement = cardElement.querySelector('.photo-place__like-btn');
  const deleteBtnElement = cardElement.querySelector('.photo-place__delete-btn');

  const popupImage = document.querySelector('.popup_modal-type_image');
  const popupImageElement = popupImage.querySelector('.popup__image');
  const popupCaptionElement = popupImage.querySelector('.popup__caption');

  imageElement.src = imageData.link;
  imageElement.alt = imageData.name;
  titleElement.textContent = imageData.name;

  const handleDelete = function () {
    cardElement.remove();
  };

  const handleLike = function () {
    likeBtnElement.classList.toggle('photo-place__like-btn_active');
  };

  const handleOpenImage = function () {
    popupImageElement.src = imageElement.src;
    popupImageElement.alt = imageElement.alt;
    popupCaptionElement.textContent = imageElement.alt;

    openPopup(popupImage);
  };

  deleteBtnElement.addEventListener('click', handleDelete);
  likeBtnElement.addEventListener('click', handleLike);
  imageElement.addEventListener('click', handleOpenImage);

  return cardElement;
};

initialCards.forEach((image) => {
  const element = createImageElement(image);
  imageContainer.appendChild(element);
});

// Обработка добавления новой карточки
const openBtnPopupAdd = document.querySelector('.profile__add-btn');
const popupAdd = document.querySelector('.popup_modal-type_add');

const formElementPopupAdd = popupAdd.querySelector('.popup__form_modal-type_add');
const nameImageInput = formElementPopupAdd.querySelector('.popup__input_modal-type_name-image');
const linkInput = formElementPopupAdd.querySelector('.popup__input_modal-type_link');
const submitBtnPopupAdd = formElementPopupAdd.querySelector('.popup__submit-btn_modal-type_add');

const handleOpenPopupAdd = () => {
  formElementPopupAdd.reset();
  submitBtnPopupAdd.classList.add('popup__submit-btn_inactive');
  submitBtnPopupAdd.setAttribute('disabled', '');

  openPopup(popupAdd);
};

function handleFormSubmitPopupAdd (evt) {
  evt.preventDefault();

  const newObject = { name: nameImageInput.value, link: linkInput.value};

  const element = createImageElement(newObject);
  imageContainer.prepend(element);

  closePopup(popupAdd);

  formElementPopupAdd.reset();
  submitBtnPopupAdd.setAttribute('disabled', '');
};

// Функции открытия и закрытия окон / добавления слушателей
function hideAllInputError(popupModal) {
  const textErrorList = Array.from(popupModal.querySelectorAll('.popup__text-error_active'));
  const iputErrorList = Array.from(popupModal.querySelectorAll('.popup__input_type_error'));
  textErrorList.forEach((textErrorElement) => {
    textErrorElement.classList.remove('popup__text-error_active');
  });
  iputErrorList.forEach((iputErrorElement) => {
    iputErrorElement.classList.remove('popup__input_type_error');
  });
};

function openPopup(popupModal) {
  popupModal.classList.add('popup_opened');
  document.addEventListener('keydown', handleClosePopupEsc);
  hideAllInputError(popupModal);
};

function closePopup(popupModal) {
  popupModal.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleClosePopupEsc);
};

const handleClosePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

const handleClosePopupClick = (popupElement, evt) => {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseBtn = evt.target.classList.contains('popup__close-btn');
  if (isOverlay || isCloseBtn) {
    closePopup(popupElement);
  }
};

const enablePopupListeners = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('click', function (evt) {
      handleClosePopupClick(popupElement, evt);
    });
  });

  openBtnPopupEdit.addEventListener('click', handleOpenPopupEdit);
  formElementPopupEdit.addEventListener('submit', handleFormSubmitPopupEdit);

  openBtnPopupAdd.addEventListener('click', handleOpenPopupAdd);
  formElementPopupAdd.addEventListener('submit', handleFormSubmitPopupAdd);
};

enablePopupListeners();
