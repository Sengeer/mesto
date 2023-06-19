export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(initialCards) {
    if (Array.isArray(initialCards)) {
      initialCards.forEach(item => {
        this._renderer(item);
      });
    } else {
      this._renderer(item);
    };
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
