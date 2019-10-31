var openForm = document.querySelector(".contact-button");
var popupWriteUs = document.querySelector(".modal-write-us");
var closeForm = document.querySelector(".modal-close");
var form = popupWriteUs.querySelector(".write-us-form");
var username = form.querySelector("[name=username]");
var email = form.querySelector("[name=email]");
var message = form.querySelector("[name=message]");
var isStorageSupport = true;

openForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");
  username.focus();
});

form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value || !message.value) {
        event.preventDefault();
        popupWriteUs.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
      localStorage.setItem("username", username.value);
    }
    }
});

closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
  popupWriteUs.classList.remove("modal-error");
});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupWriteUs.classList.contains("modal-show")) {
      evt.preventDefault();
      popupWriteUs.classList.remove("modal-show");
      popupWriteUs.classList.remove("modal-error");
    }
  }
});
