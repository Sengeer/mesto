import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    super.open();
    
    this._popupImage = document.querySelector('.popup_modal-type_image');
    this._popupImageElement = this._popupImage.querySelector('.popup__image');
    this._popupCaptionElement = this._popupImage.querySelector('.popup__caption');

    this._popupImageElement.src = link;
    this._popupImageElement.alt = name;
    this._popupCaptionElement.textContent = name;
  }
}
