import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageElement = this._popup.querySelector('.popup__image');
    this._popupCaptionElement = this._popup.querySelector('.popup__caption');
  }

  open(name, link) {
    super.open();

    this._popupImageElement.src = link;
    this._popupImageElement.alt = name;
    this._popupCaptionElement.textContent = name;
  }
}
