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
  const elementLikeButton = imageElement.querySelector('.photo-place__like-btn');
  const elementDeleteButton = imageElement.querySelector('.photo-place__delete-btn');

  elementImage.src = imageData.link;
  elementImage.alt = imageData.name;
  elementTitle.textContent = imageData.name;

  const handleDelete = function () {
    imageElement.remove();
  };

  const handleLike = function () {
    elementLikeButton.classList.toggle('photo-place__like-btn_active');
  };

  elementDeleteButton.addEventListener('click', handleDelete);
  elementLikeButton.addEventListener('click', handleLike);

  return imageElement;
};

initialCards.forEach((image) => {
  const element = addImageElement(image);
  imageContainer.prepend(element);
});

