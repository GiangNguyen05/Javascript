const btnAdd = document.querySelector("#btn");
const myName = document.querySelector("#userName");
const removeBtn = document.querySelector(".del");
const newList = document.querySelector("#list tbody");
if (btnAdd) {
  btnAdd.addEventListener("click", () => {
    const todo = {
      id: getRandomInt(0, 1000),
      name: myName.value,
    };
    let myList = JSON.parse(localStorage.getItem("Ten"));
    if (!Array.isArray(myList)) {
      myList = [];
    }
    const index = myList.findIndex((item) => item.id === todo.id);
    if (index !== -1) {
      myList[index].name = todo.name;
    } else {
      myList.push(todo);
    }
    localStorage.setItem("Ten", JSON.stringify(myList));
    console.log("Danh sách hiện tại:", myList);
    renderTable();
    window.location.href = `index.html`;
  });
}
if (newList) {
  newList.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
      const row = e.target.closest("tr");
      const idToDelete = Number(row.dataset.id);
      row.remove();
      // 2. Xóa trong LocalStorage
      // - Lấy mảng về
      let myList = JSON.parse(localStorage.getItem("Ten")) || [];

      // - Lọc bỏ phần tử có ID trùng với ID vừa bấm xóa
      myList = myList.filter((item) => item.id !== idToDelete);

      // - Lưu mảng mới (đã bớt 1 phần tử) ngược lại vào LocalStorage
      localStorage.setItem("Ten", JSON.stringify(myList));

      console.log("Đã xóa ID:", idToDelete);
    }
  });
}

function renderTable() {
  const myList = JSON.parse(localStorage.getItem("Ten")) || [];
  if (!newList) return;
  newList.innerHTML = "";
  myList.forEach((item) => {
    newList.innerHTML += `
            <tr data-id="${item.id}">
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td><button class="del">Xóa</button></td>
            </tr>
        `;
  });
}
renderTable();

function getRandomInt(min, max) {
  // min: số nhỏ nhất bạn muốn
  // max: số lớn nhất bạn muốn
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
