const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const openPopupBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close-btn');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const formElement = popup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_modal-type_name');
const descriptionInput = formElement.querySelector('.popup__input_modal-type_description');

function openPopup() {
  popup.classList.add('popup_opened');

  const textName = profileName.textContent;
  const textDescription = profileDescription.textContent;

  nameInput.value = textName;
  descriptionInput.value = textDescription;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

openPopupBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
  evt.preventDefault();

  const nameText = nameInput.value;
  const descriptionText = descriptionInput.value;

  profileName.textContent = nameText;
  profileDescription.textContent = descriptionText;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

const imageTemplate = document.getElementById('image-template');
const imageContainer = document.querySelector('.photo-place__elements');

const addImageElement = function (imageData) {
  const imageElement = imageTemplate.content.querySelector('.photo-place__element').cloneNode(true);

  const elementImage = imageElement.querySelector('.photo-place__image');
  const elementTitle = imageElement.querySelector('.photo-place__title');

  elementImage.src = imageData.link;
  elementImage.alt = imageData.name;
  elementTitle.textContent = imageData.name;
};
