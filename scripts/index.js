import { initialCards } from "./constants.js";

function openPopup(popupModal) {
  popupModal.classList.add('popup_opened');
};

function closePopup(popupModal) {
  popupModal.classList.remove('popup_opened');
};

const openBtnPopupEdit = document.querySelector('.profile__edit-btn');
const popupEdit = document.querySelector('.popup_modal-type_edit');
const closeBtnPopupEdit = popupEdit.querySelector('.popup__close-btn_modal-type_edit');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const formElementPopupEdit = popupEdit.querySelector('.popup__form_modal-type_edit');
const nameInput = formElementPopupEdit.querySelector('.popup__input_modal-type_name');
const descriptionInput = formElementPopupEdit.querySelector('.popup__input_modal-type_description');

function openPopupEdit() {
  openPopup(popupEdit);

  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
};

function closePopupEdit() {
  closePopup(popupEdit);
};

openBtnPopupEdit.addEventListener('click', openPopupEdit);
closeBtnPopupEdit.addEventListener('click', closePopupEdit);

function handleFormSubmitPopupEdit (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopupEdit();
};

formElementPopupEdit.addEventListener('submit', handleFormSubmitPopupEdit);

const imageTemplate = document.querySelector('.card-template');
const imageContainer = document.querySelector('.photo-place__elements');

const popupImage = document.querySelector('.popup_modal-type_image');

const createImageElement = function (imageData) {
  const cardElement = imageTemplate.content.querySelector('.photo-place__element').cloneNode(true);

  const imageElement = cardElement.querySelector('.photo-place__image');
  const titleElement = cardElement.querySelector('.photo-place__title');
  const likeBtnElement = cardElement.querySelector('.photo-place__like-btn');
  const deleteBtnElement = cardElement.querySelector('.photo-place__delete-btn');

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

const openBtnPopupAdd = document.querySelector('.profile__add-btn');
const popupAdd = document.querySelector('.popup_modal-type_add');
const closeBtnPopupAdd = popupAdd.querySelector('.popup__close-btn_modal-type_add');

const formElementPopupAdd = popupAdd.querySelector('.popup__form_modal-type_add');
const nameImageInput = formElementPopupAdd.querySelector('.popup__input_modal-type_name-image');
const linkInput = formElementPopupAdd.querySelector('.popup__input_modal-type_link');

function openPopupAdd() {
  openPopup(popupAdd);
};

function closePopupAdd() {
  closePopup(popupAdd);
};

openBtnPopupAdd.addEventListener('click', openPopupAdd);
closeBtnPopupAdd.addEventListener('click', closePopupAdd);

function handleFormSubmitPopupAdd (evt) {
  evt.preventDefault();

  const newObject = { name: nameImageInput.value, link: linkInput.value};

  const element = createImageElement(newObject);
  imageContainer.prepend(element);

  closePopupAdd();

  formElementPopupAdd.reset();
};

formElementPopupAdd.addEventListener('submit', handleFormSubmitPopupAdd);

const closeBtnPopupImage = document.querySelector('.popup__close-btn_modal-type_image');

function closePopupImage() {
  closePopup(popupImage);
};

closeBtnPopupImage.addEventListener('click', closePopupImage);
