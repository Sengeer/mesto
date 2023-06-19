import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor( popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement = this._popup.querySelector('.popup__form');
    this._formElement.addEventListener('submit', () => {
      this._handleFormSubmit(this.card, this._cardId);
    });
  }

  open(card, cardId) {
    super.open();
    this.card = card;
    this._cardId = cardId;
  }
}
