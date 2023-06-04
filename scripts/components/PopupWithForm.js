import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, handleClosePopup) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupSelector = document.querySelector(popupSelector);
    this._handleClosePopup = handleClosePopup;
  }

  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll('.popup__input');
  }

  setEventListeners() {
    super.setEventListeners();

    this._getInputValues();
    this._formElement = this._popupSelector.querySelector('.popup__form');
    this._formElement.addEventListener('submit', (evt) => {
      this._handleFormSubmit(evt, this._inputList);
    });
  }

  close() {
    super.close();

    this._formElement.reset();
  }

  open() {
    super.open();

    this._handleClosePopup(this._popupSelector, this._inputList);
  }
}
