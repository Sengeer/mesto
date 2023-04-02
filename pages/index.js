let openPopupBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.pop-up');
let popupCloseBtn = document.querySelector('.pop-up__close-btn');
let pupupSubmitBtn = document.querySelector('.pop-up__submit-btn');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let formElement = document.querySelector('.pop-up__form');
let nameInput = formElement.querySelector('.pop-up__edit-name');
let descriptionInput = formElement.querySelector('.pop-up__edit-description');

function openPopup() {
  popup.classList.add('pop-up_opened');

  let textName = profileName.textContent;
  let textDescription = profileDescription.textContent;

  nameInput.value = textName;
  descriptionInput.value = textDescription;
}

function closePopup(evt) {
  let isOverlay = evt.target.classList.contains('pop-up__overlay');
  let isCloseBtn = evt.target.classList.contains('pop-up__close-btn');
  let isSubmitBtn = evt.target.classList.contains('pop-up__submit-btn');

  if (isOverlay || isCloseBtn || isSubmitBtn) {
    popup.classList.remove('pop-up_opened');
  }
}

openPopupBtn.addEventListener('click', openPopup);
popup.addEventListener('click', closePopup);
pupupSubmitBtn.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
  evt.preventDefault();

  let nameText = nameInput.value;
  let descriptionText = descriptionInput.value;

  profileName.textContent = nameText;
  profileDescription.textContent = descriptionText;
}

formElement.addEventListener('submit', handleFormSubmit);
