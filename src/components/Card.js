export default class Card {
  constructor(
    item,
    templateSelector,
    handleCardClick,
    { handleOpenPopupDelete,
      handleLikeClick }
  ) {
    this._name = item.name;
    this._link = item.link;
    this._myId = item.myId;
    this._ownerId = item.owner._id;
    this._cardId = item._id;
    this._likes = item.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleOpenPopupDelete = handleOpenPopupDelete;
    this._handleLikeClick = handleLikeClick;
  }

  _checkIdCard() {
    if (this._myId !== this._ownerId) {
      this._deleteButton.remove();
    }
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
    this._likeCounter = this._element.querySelector('.photo-place__like-counter');
    this._likeButton = this._element.querySelector('.photo-place__like-btn');
    this._deleteButton = this._element.querySelector('.photo-place__delete-btn');
    this._cardImage = this._element.querySelector('.photo-place__image');
    this._cardTitle = this._element.querySelector('.photo-place__title');

    this._likeButton.addEventListener('click', () => {
      this._handleLike();
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleOpenPopupDelete(this, this._cardId);
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  _checkStatusLikes() {
    this._likes.forEach(item => {
      if (item._id === this._myId) {
        this._likeButton.classList.add('photo-place__like-btn_active');
      }
    });
  }

  _addQuantityLikes() {
    this._likeCounter.textContent = this._likes.length;
  }

  _handleLike() {
    this._handleLikeClick(this._likeButton, this._cardId);
  }

  toggleLike(likesArray) {
    this._likeCounter.textContent = likesArray.length;
    this._likeButton.classList.toggle('photo-place__like-btn_active');
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._checkIdCard();
    this._addQuantityLikes();
    this._checkStatusLikes();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    return this._element;
  }
};
