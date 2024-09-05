let modal = document.querySelector(".myModal");
let btn = document.querySelector(".openModalBtn");
btn.onclick = function () {
  modal.style.display = "block";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
