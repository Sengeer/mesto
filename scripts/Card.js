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

class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    
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
    this._likeButton = this._element.querySelector('.photo-place__like-btn');
    this._deleteButton = this._element.querySelector('.photo-place__delete-btn');
    this._cardImage = this._element.querySelector('.photo-place__image');
    this._cardTitle = this._element.querySelector('.photo-place__title');

    this._likeButton.addEventListener('click', () => {
      this._handleLike();
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleDelete();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  _handleLike() {
    this._likeButton.classList.toggle('photo-place__like-btn_active');
  }

  _handleDelete() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    return this._element;
  }
}

export { Card, initialCards };
