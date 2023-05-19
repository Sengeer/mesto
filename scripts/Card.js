import { openPopup } from "./index.js";

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

const popupImage = document.querySelector('.popup_modal-type_image');
const popupImageElement = popupImage.querySelector('.popup__image');
const popupCaptionElement = popupImage.querySelector('.popup__caption');

const imageContainer = document.querySelector('.photo-place__elements');

class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.photo-place__element')
    .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.photo-place__image').addEventListener('click', () => {
      this._handleOpenImage();
    });
    this._element.querySelector('.photo-place__like-btn').addEventListener('click', () => {
      this._handleLike();
    });
    this._element.querySelector('.photo-place__delete-btn').addEventListener('click', () => {
      this._handleDelete();
    });
  }

  _handleOpenImage() {
    popupImageElement.src = this._link;
    popupImageElement.alt = this._name;
    popupCaptionElement.textContent = this._name;

    openPopup(popupImage);
  }

  _handleLike() {
    this._element.querySelector('.photo-place__like-btn').classList.toggle('photo-place__like-btn_active');
  }

  _handleDelete() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.photo-place__image').src = this._link;
    this._element.querySelector('.photo-place__image').alt = this._name;
    this._element.querySelector('.photo-place__title').textContent = this._name;

    return this._element;
  }
}

const createCard = (object) => {
  const card = new Card(object, '.card-template');
  const cardElement = card.generateCard();
  return cardElement;
};

initialCards.forEach((nestedObject) => {
  imageContainer.appendChild(createCard(nestedObject));
});


export { imageContainer, createCard };
