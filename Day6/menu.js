console.log("hello");

const newTitle = document.querySelector(".title");
const newProducts = document.querySelector(".products");
const btnAdd = document.querySelector(".add");
const container = document.querySelector(".container");
// btnAdd.addEventListener("click", () => {
//   const newDiv = document.createElement("div");
//   newDiv.innerHTML = newProducts.innerHTML;
//   newDiv.classList.add("products");
//   container.appendChild(newDiv);
// });
btnAdd.addEventListener("click", () => {
  const clone = newProducts.cloneNode(true);
  const del = clone.querySelector(".dele");
  if (del) {
    del.addEventListener("click", () => {
      clone.remove();
    });
  }
  container.appendChild(clone);
});
