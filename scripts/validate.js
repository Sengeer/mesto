const defineInputError = (formElement, inputElement) => {
  return formElement.querySelector(`.${inputElement.name}-error`);
};

const showInputError = (formElement, inputElement, errorMessage, enableConfig) => {
  const errorElement = defineInputError(formElement, inputElement);
  inputElement.classList.add(enableConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(enableConfig.activeErrorClass);
};

const hideInputError = (formElement, inputElement, enableConfig) => {
  const errorElement = defineInputError(formElement, inputElement);
  inputElement.classList.remove(enableConfig.inputErrorClass);
  errorElement.classList.remove(enableConfig.activeErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, enableConfig) => {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, enableConfig);
  } else {
    showInputError(formElement, inputElement, inputElement.validationMessage, enableConfig);
  }
};

const setEventListeners = (formElement, enableConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(enableConfig.inputSelector));
  const buttonElement = formElement.querySelector(enableConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, enableConfig);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, enableConfig);
      toggleButtonState(inputList, buttonElement, enableConfig);
    });
  });
};

const enableValidation = (enableConfig) => {
  const formList = Array.from(document.querySelectorAll(enableConfig.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, enableConfig);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, enableConfig) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(enableConfig.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(enableConfig.inactiveButtonClass);
  }
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  activeErrorClass: 'popup__input-error_active'
});
