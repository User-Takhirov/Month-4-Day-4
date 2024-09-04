const btn = document.querySelector(".btn");
const main_content = document.querySelector(".main_content");
const left = document.querySelector(".left");

const removeDrower = () => {
  left.classList.remove("open");
  main_content.classList.remove("show");
};

btn.addEventListener("click", () => {
  left.classList.toggle("open");
  main_content.classList.add("show");
});

main_content.addEventListener("click", removeDrower);
