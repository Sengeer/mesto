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
    this._inputList.forEach((input) => {
      this._formValues[input.name.replace('-input', '')] = input.value;
    });
    return this._formValues;
  }

  addDefaultTextSubmitButton() {
    this._submitButton.textContent = this._defaultSubmitButtonText;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton = this._popupSelector.querySelector('.popup__submit-btn');
    this._defaultSubmitButtonText = this._submitButton.textContent;

    this._getInputValues();
    this._formElement = this._popupSelector.querySelector('.popup__form');
    this._formElement.addEventListener('submit', (evt) => {
      this._submitButton.textContent = `${this._submitButton.textContent}...`
      this._handleFormSubmit(this._getInputValues(), evt);
    });
  }

  open() {
    super.open();
    this._formElement.reset();

    this._handleOpenPopup(this._inputList);
  }
}
