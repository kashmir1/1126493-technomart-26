var openForm = document.querySelector(".contact-button");
var popupWriteUs = document.querySelector(".modal-write-us");
var closeForm = document.querySelector(".modal-close");
var userName = popupWriteUs.querySelector("[name=username]");

openForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");
  userName.focus();
});

closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupWriteUs.classList.contains("modal-show")) {
      evt.preventDefault();
      popupWriteUs.classList.remove("modal-show");
    }
  }
});
