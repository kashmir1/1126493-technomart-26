var cartAdd = document.querySelectorAll(".buy-button");
var popupCartAdd = document.querySelector(".modal-cart-add");
var closeForm = document.querySelector(".modal-cart-close");

for (var i = 0; i < cartAdd.length; i++) {
  cartAdd[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCartAdd.classList.add("modal-show");
  });
}
closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCartAdd.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupCartAdd.classList.contains("modal-show")) {
      evt.preventDefault();
      popupCartAdd.classList.remove("modal-show");
    }
  }
});
