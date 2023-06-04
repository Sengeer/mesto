export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
      document.removeEventListener('keydown', (evt) => {
        this._handleEscClose(evt);
      });
    };
  }

  setEventListeners() {
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
    this._popup.addEventListener('mousedown', (evt) => {
      const isOverlay = evt.target.classList.contains('popup');
      const isCloseBtn = evt.target.classList.contains('popup__close-btn');
      if (isOverlay || isCloseBtn) {
        this.close();
      };
    });
  }
}
