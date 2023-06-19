(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o){var i=o.handleOpenPopupDelete,u=o.handleLikeClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._myId=e.myId,this._ownerId=e.owner._id,this._cardId=e._id,this._likes=e.likes,this._templateSelector=n,this._handleCardClick=r,this._handleOpenPopupDelete=i,this._handleLikeClick=u}var n,r;return n=t,(r=[{key:"_checkIdCard",value:function(){this._myId!==this._ownerId&&this._deleteButton.remove()}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".photo-place__element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._likeCounter=this._element.querySelector(".photo-place__like-counter"),this._likeButton=this._element.querySelector(".photo-place__like-btn"),this._deleteButton=this._element.querySelector(".photo-place__delete-btn"),this._cardImage=this._element.querySelector(".photo-place__image"),this._cardTitle=this._element.querySelector(".photo-place__title"),this._likeButton.addEventListener("click",(function(){t._handleLike()})),this._deleteButton.addEventListener("click",(function(){t._handleOpenPopupDelete(t,t._cardId)})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"_checkStatusLikes",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._myId&&t._likeButton.classList.add("photo-place__like-btn_active")}))}},{key:"_addQuantityLikes",value:function(){this._likeCounter.textContent=this._likes.length}},{key:"_handleLike",value:function(){this._handleLikeClick(this._likeButton,this._cardId)}},{key:"toggleLike",value:function(t){this._likeCounter.textContent=t.length,this._likeButton.classList.toggle("photo-place__like-btn_active")}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._checkIdCard(),this._addQuantityLikes(),this._checkStatusLikes(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;Array.isArray(t)?t.forEach((function(t){e._renderer(t)})):this._renderer(item)}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){var n=e.target.classList.contains("popup"),r=e.target.classList.contains("popup__close-btn");(n||r)&&t.close()}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},f.apply(this,arguments)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(o){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImageElement=e._popup.querySelector(".popup__image"),e._popupCaptionElement=e._popup.querySelector(".popup__caption"),e}return e=u,(n=[{key:"open",value:function(t,e){f(h(u.prototype),"open",this).call(this),this._popupImageElement.src=e,this._popupImageElement.alt=t,this._popupCaptionElement.textContent=t}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return b(t)}(this,t)});function u(t,e){var n,r=e.handleFormSubmit,o=e.handleOpenPopup;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=r,n._popupSelector=document.querySelector(t),n._handleOpenPopup=o,n._getInputValues=n._getInputValues.bind(b(n)),n._submitButton=n._popupSelector.querySelector(".popup__submit-btn"),n._defaultSubmitButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList=this._popupSelector.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name.replace("-input","")]=e.value})),this._formValues}},{key:"_renderLoading",value:function(){this._submitButton.textContent="".concat(this._submitButton.textContent,"...")}},{key:"addDefaultTextSubmitButton",value:function(){this._submitButton.textContent=this._defaultSubmitButtonText}},{key:"setEventListeners",value:function(){var t=this;_(S(u.prototype),"setEventListeners",this).call(this),this._getInputValues(),this._formElement=this._popupSelector.querySelector(".popup__form"),this._formElement.addEventListener("submit",(function(){t._renderLoading(),t._handleFormSubmit(t._getInputValues())}))}},{key:"open",value:function(){_(S(u.prototype),"open",this).call(this),this._formElement.reset(),this._handleOpenPopup(this._inputList)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e.nameSelector),this._description=document.querySelector(e.descriptionSelector),this._avatar=document.querySelector(e.avatarSelector)}var e,n;return e=t,(n=[{key:"getMyId",value:function(){return this._myId}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t,e,n,r){(t||e||n||r)&&(this._name.textContent=t,this._avatar.alt=t,this._description.textContent=e,this._avatar.src=n,this._myId=r)}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var j=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._activeErrorClass=e.activeErrorClass,this._formElement=n}var e,n;return e=t,(n=[{key:"_defineInputError",value:function(){return this._formElement.querySelector(".".concat(this._inputElement.name,"-error"))}},{key:"_showInputError",value:function(){this._errorElement=this._defineInputError(),this._inputElement.classList.add(this._inputErrorClass),this._errorElement.textContent=this._inputElement.validationMessage,this._errorElement.classList.add(this._activeErrorClass)}},{key:"_hideInputError",value:function(){this._errorElement=this._defineInputError(),this._inputElement.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._activeErrorClass),this._errorElement.textContent=""}},{key:"_checkInputValidity",value:function(){this._inputElement.validity.valid?this._hideInputError():this._showInputError()}},{key:"_setEventListeners",value:function(){var t=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._inputElement=e,t._checkInputValidity(),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","")):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"disableSubmitButton",value:function(){this._buttonElement.setAttribute("disabled","")}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._inputElement=e,t._hideInputError()}))}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),C=document.querySelector(".profile__edit-btn"),L=document.querySelector(".profile__add-btn"),I=document.querySelector(".profile__avatar-btn");function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var R=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject(t)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(t){var e=t.name,n=void 0===e?"":e,r=t.description,o=void 0===r?"":r,i=t.avatarLink,u=void 0===i?"":i;return n&&o?fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:o})}).then(this._checkResponse):u?fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:u})}).then(this._checkResponse):void 0}},{key:"addNewCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addCardLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"removeCardLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},U.apply(this,arguments)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(r);if(o){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=r,n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;U(D(u.prototype),"setEventListeners",this).call(this),this._formElement=this._popup.querySelector(".popup__form"),this._formElement.addEventListener("submit",(function(){t._handleFormSubmit(t.card,t._cardId)}))}},{key:"open",value:function(t,e){U(D(u.prototype),"open",this).call(this),this.card=t,this._cardId=e}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var N=function(t){console.error("Ошибка! Статус: ".concat(t.status," // URL: ").concat(t.url))},M=function(t,e){$.open(t,e)},J=function(t){var e=new n(t,".card-template",M,{handleOpenPopupDelete:function(t,e){K.open(t,e)},handleLikeClick:function(t,n){t.classList.contains("photo-place__like-btn_active")?X.removeCardLike(n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){return N(t)})):X.addCardLike(n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){return N(t)}))}}),r=e.generateCard();H.addItem(r)},H=new i({renderer:J},".photo-place__elements"),Q=new g(".popup_modal-type_edit",{handleFormSubmit:function(t){X.patchUserInfo({name:t.name,description:t.description}).then((function(t){W.setUserInfo(t.name,t.about,t.avatar),Z["profile-form"].disableSubmitButton(),Q.close()})).catch((function(t){return N(t)})).finally((function(){return Q.addDefaultTextSubmitButton()}))},handleOpenPopup:function(t){var e=W.getUserInfo();t[0].value=e.name,t[1].value=e.description,Z["profile-form"].resetValidation()}});Q.setEventListeners();var z=new g(".popup_modal-type_add",{handleFormSubmit:function(t){X.addNewCard({name:t.image,link:t.link}).then((function(t){var e=t;e.myId=W.getMyId(),J(e),Z["add-form"].disableSubmitButton(),z.close()})).catch((function(t){return N(t)})).finally((function(){return z.addDefaultTextSubmitButton()}))},handleOpenPopup:function(){Z["add-form"].resetValidation()}});z.setEventListeners();var $=new y(".popup_modal-type_image");$.setEventListeners();var G=new g(".popup_modal-type_avatar",{handleFormSubmit:function(t){X.patchUserInfo({avatarLink:t.link}).then((function(t){W.setUserInfo(t.name,t.about,t.avatar),Z["avatar-form"].disableSubmitButton(),G.close()})).catch((function(t){return N(t)})).finally((function(){return G.addDefaultTextSubmitButton()}))},handleOpenPopup:function(){Z["avatar-form"].resetValidation()}});G.setEventListeners();var K=new V(".popup_modal-type_confirm",{handleFormSubmit:function(t,e){X.deleteCard(e).then((function(){t.removeCard(),K.close()})).catch((function(t){return N(t)}))}});K.setEventListeners();var W=new w({nameSelector:".profile__name",descriptionSelector:".profile__description",avatarSelector:".profile__avatar"}),X=new R({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"8eb2c5a1-7216-4743-9490-cbf6391354bb","Content-Type":"application/json"}});C.addEventListener("click",Q.open.bind(Q)),L.addEventListener("click",z.open.bind(z)),I.addEventListener("click",G.open.bind(G));var Y,Z={};Y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_inactive",inputErrorClass:"popup__input_type_error",activeErrorClass:"popup__text-error_active"},Array.from(document.querySelectorAll(Y.formSelector)).forEach((function(t){var e=new j(Y,t),n=t.getAttribute("name");Z[n]=e,e.enableValidation()})),Promise.all([X.getUserInfo(),X.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return F(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W.setUserInfo(o.name,o.about,o.avatar,o._id);var u=i.reverse();u.forEach((function(t){return t.myId=o._id})),H.renderItems(u)})).catch((function(t){return N(t)}))})();