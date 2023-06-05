import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(
    popupSelector,
    handleFormSubmitEdit,
    handleFormSubmitAdd,
    handleOpenPopup) {
    super(popupSelector);
    this._handleFormSubmitEdit = handleFormSubmitEdit;
    this._handleFormSubmitAdd = handleFormSubmitAdd;
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
    this._formElement.addEventListener('submit', (evt) => {
      if (evt.target.classList[1] === 'popup__form_modal-type_edit') {
        this._handleFormSubmitEdit(this._getInputValues());
      } else if (evt.target.classList[1] === 'popup__form_modal-type_add') {
        this._handleFormSubmitAdd(this._getInputValues());
      };
    });
  }

  close() {
    super.close();

    this._formElement.reset();
  }

  open() {
    super.open();

    this._handleOpenPopup(this._popupSelector, this._inputList);
  }
}
