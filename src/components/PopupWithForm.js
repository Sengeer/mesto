import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(
    popupSelector,
    { handleFormSubmit,
      handleOpenPopup }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupSelector = document.querySelector(popupSelector);
    this._handleOpenPopup = handleOpenPopup;
    this._getInputValues = this._getInputValues.bind(this);
  }

  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._getInputValues();
    this._formElement = this._popupSelector.querySelector('.popup__form');
    this._formElement.addEventListener('submit', () => {
        this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();

    this._formElement.reset();
  }

  open() {
    super.open();

    this._handleOpenPopup(this._inputList);
  }
}
