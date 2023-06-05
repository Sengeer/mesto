export default class UserInfo {
  constructor(profileSelectors) {
    this._name = document.querySelector(profileSelectors.nameSelector);
    this._description = document.querySelector(profileSelectors.descriptionSelector);
  }

  getUserInfo() {
    return { name: this._name.textContent, description: this._description.textContent }
  }

  setUserInfo(name, description) {
    this._name.textContent = name;
    this._description.textContent = description;
  }
}