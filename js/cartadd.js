var cartAdd = document.querySelectorAll(".buy-button");
var popupCartAdd = document.querySelector(".modal-cart-add");
var closeForm = document.querySelector(".modal-close");


cartAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCartAdd.classList.add("modal-show");
  userName.focus();
});

closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCartAdd.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupWriteUs.classList.contains("modal-show")) {
      evt.preventDefault();
      popupCartAdd.classList.remove("modal-show");
    }
  }
});
