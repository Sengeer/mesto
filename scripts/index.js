let openPopupBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.pop-up');
let popupCloseBtn = popup.querySelector('.pop-up__close-btn');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let formElement = popup.querySelector('.pop-up__form');
let nameInput = formElement.querySelector('.pop-up__input_type_name');
let descriptionInput = formElement.querySelector('.pop-up__input_type_description');

function openPopup() {
  popup.classList.add('pop-up_opened');

  let textName = profileName.textContent;
  let textDescription = profileDescription.textContent;

  nameInput.value = textName;
  descriptionInput.value = textDescription;
}

function closePopup() {
    popup.classList.remove('pop-up_opened');
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
