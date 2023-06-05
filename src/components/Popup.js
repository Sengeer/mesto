export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      const isOverlay = evt.target.classList.contains('popup');
      const isCloseBtn = evt.target.classList.contains('popup__close-btn');
      if (isOverlay || isCloseBtn) {
        this.close();
      };
    });
  }
}
