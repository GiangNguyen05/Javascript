const btn = document.querySelector("#btn");
const title = document.querySelector("#title");
btn.addEventListener("click", () => {
  btn.parentElement.style.backgroundColor = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`;
  console.log(btn.parentElement.style.backgroundColor);
});
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
