var link = document.querySelector(".btn-form");
var over = document.querySelector(".modal-overlay");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  over.classList.add("modal-content-show-overlay");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  over.classList.remove("modal-content-show-overlay");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
    }
    if (over.classList.contains("modal-content-show-overlay")) {
      over.classList.remove("modal-content-show-overlay");
    }
  }
});
