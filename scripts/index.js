import { initialCards } from "./constants.js";

function openPopup(popupModalType) {
  popupModalType.classList.add('popup_opened');
};

function closePopup(popupModalType) {
  popupModalType.classList.remove('popup_opened');
};

const openPopupEditBtn = document.querySelector('.profile__edit-btn');
const popupEdit = document.querySelector('.popup_modal-type_edit');
const closePopupEditBtn = popupEdit.querySelector('.popup__close-btn_modal-type_edit');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const formPopupEditElement = popupEdit.querySelector('.popup__form_modal-type_edit');
const nameInput = formPopupEditElement.querySelector('.popup__input_modal-type_name');
const descriptionInput = formPopupEditElement.querySelector('.popup__input_modal-type_description');

function openPopupEdit() {
  openPopup(popupEdit);

  const textName = profileName.textContent;
  const textDescription = profileDescription.textContent;

  nameInput.value = textName;
  descriptionInput.value = textDescription;
};

function closePopupEdit() {
  closePopup(popupEdit);
};

openPopupEditBtn.addEventListener('click', openPopupEdit);
closePopupEditBtn.addEventListener('click', closePopupEdit);

function handlePopupEditFormSubmit (evt) {
  evt.preventDefault();

  const nameText = nameInput.value;
  const descriptionText = descriptionInput.value;

  profileName.textContent = nameText;
  profileDescription.textContent = descriptionText;
  closePopupEdit();
};

formPopupEditElement.addEventListener('submit', handlePopupEditFormSubmit);

const imageTemplate = document.querySelector('.card-template');
const imageContainer = document.querySelector('.photo-place__elements');

const createImageElement = function (imageData) {
  const imageElement = imageTemplate.content.querySelector('.photo-place__element').cloneNode(true);

  const elementImage = imageElement.querySelector('.photo-place__image');
  const elementTitle = imageElement.querySelector('.photo-place__title');
  const elementLikeButton = imageElement.querySelector('.photo-place__like-btn');
  const elementDeleteButton = imageElement.querySelector('.photo-place__delete-btn');

  const popupImage = document.querySelector('.popup_modal-type_image');
  const popupImageElement = popupImage.querySelector('.popup__image');
  const popupCaptionElement = popupImage.querySelector('.popup__caption');

  elementImage.src = imageData.link;
  elementImage.alt = imageData.name;
  elementTitle.textContent = imageData.name;

  const handleDelete = function () {
    imageElement.remove();
  };

  const handleLike = function () {
    elementLikeButton.classList.toggle('photo-place__like-btn_active');
  };

  const handleOpenImage = function () {
    const imageElementSrc = elementImage.src;
    const imageElementAlt = elementImage.alt;

    popupImageElement.src = imageElementSrc;
    popupImageElement.alt = imageElementAlt;
    popupCaptionElement.textContent = imageElementAlt;

    openPopup(popupImage);
  };

  elementDeleteButton.addEventListener('click', handleDelete);
  elementLikeButton.addEventListener('click', handleLike);
  elementImage.addEventListener('click', handleOpenImage);

  return imageElement;
};

initialCards.forEach((image) => {
  const element = createImageElement(image);
  imageContainer.appendChild(element);
});

const openPopupAddBtn = document.querySelector('.profile__add-btn');
const popupAdd = document.querySelector('.popup_modal-type_add');
const closePopupAddBtn = popupAdd.querySelector('.popup__close-btn_modal-type_add');

const formPopupAddElement = popupAdd.querySelector('.popup__form_modal-type_add');
const nameImageInput = formPopupAddElement.querySelector('.popup__input_modal-type_name-image');
const linkInput = formPopupAddElement.querySelector('.popup__input_modal-type_link');

function openPopupAdd() {
  openPopup(popupAdd);
};

function closePopupAdd() {
  closePopup(popupAdd);
};

openPopupAddBtn.addEventListener('click', openPopupAdd);
closePopupAddBtn.addEventListener('click', closePopupAdd);

function handlePopupAddFormSubmit (evt) {
  evt.preventDefault();

  const nameImageText = nameImageInput.value;
  const nameLinkText = linkInput.value;

  const newElement = { name: nameImageText, link: nameLinkText};

  const element = createImageElement(newElement);
  imageContainer.prepend(element);

  closePopupAdd();

  formPopupAddElement.reset();
};

formPopupAddElement.addEventListener('submit', handlePopupAddFormSubmit);

const popupImage = document.querySelector('.popup_modal-type_image');
const popupImageCloseBtn = document.querySelector('.popup__close-btn_modal-type_image');

function closePopupImage() {
  closePopup(popupImage);
};

popupImageCloseBtn.addEventListener('click', closePopupImage);
