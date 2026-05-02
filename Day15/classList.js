// const parent = document.querySelector(".content");
// const child1 = document.querySelector(".child1");
// const child2 = document.querySelector(".child2");

// console.log(parent.children);
// console.log(parent.children[1].nextElementSibling); // lấy phần tử tiếp theo cùng cấp
// console.log(parent.children[1].previousElementSibling); // lấy phần tử trước đó cùng cấp
// console.log("====================");
// const text = document.createElement("p");
// text.innerText = "ABC";
// child1.append(text);

const container = document.querySelector("#container");

for (let i = 1; i <= 100; i++) {
  const btn = document.createElement("button");
  btn.innerText = `Button ${i}`;
  const listBtn = container.appendChild(btn);
  console.log(listBtn);
}
