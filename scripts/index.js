let openPopupBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let popupCloseBtn = popup.querySelector('.popup__close-btn');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let descriptionInput = formElement.querySelector('.popup__input_type_description');

function openPopup() {
  popup.classList.add('popup_opened');

  let textName = profileName.textContent;
  let textDescription = profileDescription.textContent;

  nameInput.value = textName;
  descriptionInput.value = textDescription;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

openPopupBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
  evt.preventDefault();

  let nameText = nameInput.value;
  let descriptionText = descriptionInput.value;

  profileName.textContent = nameText;
  profileDescription.textContent = descriptionText;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
