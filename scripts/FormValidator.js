const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  activeErrorClass: 'popup__text-error_active'
};

const formList = Array.from(document.querySelectorAll(config.formSelector));

class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._activeErrorClass = config.activeErrorClass;
    this._formElement = formElement;
  }

  _defineInputError() {
    return this._formElement.querySelector(`.${this._inputElement.name}-error`);
  }

  _showInputError() {
    this._errorElement = this._defineInputError();
    this._inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = this._inputElement.validationMessage;
    this._errorElement.classList.add(this._activeErrorClass);
  }

  _hideInputError() {
    this._errorElement = this._defineInputError();
    this._inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._activeErrorClass);
    this._errorElement.textContent = '';
  }

  _checkInputValidity() {
    if (this._inputElement.validity.valid) {
      this._hideInputError(this._inputElement);
    } else {
      this._showInputError();
    }
  }

  _setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._inputElement = inputElement;
        this._checkInputValidity();
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', '');
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }
}

const createFormValidation = (formElement) => {
  return new FormValidator(config, formElement).enableValidation();
};

formList.forEach((formElement) => {
  createFormValidation(formElement);
});

export { createFormValidation };
