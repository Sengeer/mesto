const initialCards = [
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
};

function closePopup() {
    popup.classList.remove('popup_opened');
};

openPopupBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
  evt.preventDefault();

  const nameText = nameInput.value;
  const descriptionText = descriptionInput.value;

  profileName.textContent = nameText;
  profileDescription.textContent = descriptionText;
  closePopup();
};

formElement.addEventListener('submit', handleFormSubmit);

const imageTemplate = document.getElementById('card-template');
const imageContainer = document.querySelector('.photo-place__elements');

const addImageElement = function (imageData) {
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
    popupImage.classList.toggle('popup_opened');

    const imageElementSrc = elementImage.src;
    const imageElementAlt = elementImage.alt;

    popupImageElement.src = imageElementSrc;
    popupImageElement.alt = imageElementAlt;
    popupCaptionElement.textContent = imageElementAlt;
  };

  elementDeleteButton.addEventListener('click', handleDelete);
  elementLikeButton.addEventListener('click', handleLike);
  elementImage.addEventListener('click', handleOpenImage);

  return imageElement;
};

initialCards.forEach((image) => {
  const element = addImageElement(image);
  imageContainer.appendChild(element);
});

const openPopupAddBtn = document.querySelector('.profile__add-btn');
const popupAdd = document.querySelector('.popup_modal-type_add');
const closePopupAddBtn = popupAdd.querySelector('.popup__close-btn_modal-type_add');

const formElementPopupAdd = popupAdd.querySelector('.popup__form_modal-type_add');
const nameImageInput = formElementPopupAdd.querySelector('.popup__input_modal-type_name-image');
const linkInput = formElementPopupAdd.querySelector('.popup__input_modal-type_link');

function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
};

function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
};

openPopupAddBtn.addEventListener('click', openPopupAdd);
closePopupAddBtn.addEventListener('click', closePopupAdd);

function handleFormSubmitPopupAdd (evt) {
  evt.preventDefault();

  const nameImageText = nameImageInput.value;
  const nameLinkText = linkInput.value;

  const newElement = { name: `${nameImageText}`, link: `${nameLinkText}` };

  const element = addImageElement(newElement);
  imageContainer.prepend(element);

  closePopupAdd();
};

formElementPopupAdd.addEventListener('submit', handleFormSubmitPopupAdd);

const popupImage = document.querySelector('.popup_modal-type_image');
const popupImageCloseBtn = document.querySelector('.popup__close-btn_modal-type_image');

function closePopupImage() {
  popupImage.classList.remove('popup_opened');
};

popupImageCloseBtn.addEventListener('click', closePopupImage);
