export default class UserInfo {
  constructor(profileSelectors) {
    this._name = document.querySelector(profileSelectors.nameSelector);
    this._description = document.querySelector(profileSelectors.descriptionSelector);
    this._avatar = document.querySelector(profileSelectors.avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent,
      avatar: this._avatar.src
    }
  }

  setUserInfo(name, description, avatarLink) {
    this._name.textContent = name;
    this._description.textContent = description;
    this._avatar.src = avatarLink;
    this._avatar.alt = name;
  }
}
