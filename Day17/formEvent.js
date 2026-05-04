const form = document.querySelector("#login");
const name = document.querySelector("#name");
const pass = document.querySelector("#pass");
const btn = document.querySelector("#btn");
const list = document.querySelector(".list");
// 1. Khi bắt đầu, lấy dữ liệu cũ từ localStorage (nếu có) hoặc tạo mảng rỗng
const newList = JSON.parse(localStorage.getItem("G")) || [];
// Hiển thị lại danh sách cũ lên màn hình ngay khi load trang
newList.forEach((u) => (list.innerHTML += `<li>${u}</li>`));
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isPass(pass.value)) {
    const user = name.value.trim(); // Thêm .trim() để xóa dấu cách thừa
    if (user === "") return alert("Không được để trống tên");
    name.value = "";
    pass.value = "";
    if (!isUser(user)) {
      // 2. Thêm vào mảng tạm
      newList.push(user);
      // 3. Lưu CẢ MẢNG đã chuyển thành chuỗi vào localStorage
      localStorage.setItem("G", JSON.stringify(newList));
      list.innerHTML += `<li>
  ${user}
  </li>`;
    } else {
      alert("da ton tai");
    }
  }
  console.log(newList);
});

function isUser(newUser) {
  //   return newList.includes(newUser);
  return newList.some((e) => e === newUser);
}

function isPass(passWord) {
  const currentPass = "2805";
  if (passWord === currentPass) {
    return true;
  } else {
    alert("nhap lai pass");
    pass.style.borderColor = "red";
    return false;
  }
}
