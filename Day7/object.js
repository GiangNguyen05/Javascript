const newLogin = document.querySelector("#login");
newLogin.addEventListener("click", () => {
  console.log("hello");
  alert("no no no");
});
console.log("---------------");
const btn = document.querySelector("#summit");
const myName = document.querySelector("#name");

// btn.addEventListener("click", () => {
//   console.log(myName.value);
// });
const newMessage = document.querySelector("#message");
const lastName = document.querySelector("#last-name");
const prevName = localStorage.getItem("Giang");
lastName.innerHTML = prevName;
btn.addEventListener("click", () => {
  newMessage.innerHTML = myName.value;
  localStorage.setItem("Giang", myName.value);
});
