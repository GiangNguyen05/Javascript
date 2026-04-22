const user = document.getElementById("username");
// console.log(user);

// function handleClick() {
//   console.log(user);
// }
const change = document.getElementById("changeBtn");
const back = document.getElementById("backBtn");
change.addEventListener("click", () => {
  user.innerText = "Giang";
  user.style.fontSize = "10rem";
  user.classList.add("color", "bgd");
});
back.addEventListener("click", () => {
  user.innerText = "User";
  user.style.fontSize = "3rem";
  user.classList.remove("color", "bgd");
});
// change.addEventListener("click", () => {
//   user.innerHTML = "<strong>Giang</strong><em>Nguyen</em>";
// });
