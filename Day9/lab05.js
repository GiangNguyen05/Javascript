//promise
// fetch(" http://localhost:8000/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const newBtn = document.querySelector("#btn");
const newBtnRemo = document.querySelector("#btnRemo");
const userData = document.querySelector("#users tbody");
let currentId = 0;
newBtn.addEventListener("click", () => {
  currentId++;
  userData.innerHTML += `<tr>
          <td>${currentId}</td>
          <td>${userName.value}</td>
          <td>${email.value}</td>
          <td><button class="remo">DEL</button></td>
        </tr>`;
});

// async/await
const newUser = async () => {
  const res = await fetch(" http://localhost:8000/users");
  const data = await res.json();
  if (data && data.length > 0) {
    // Tìm ID lớn nhất từ dữ liệu server trả về
    currentId = Math.max(...data.map((user) => parseInt(user.id)));
    data.forEach((user, index) => {
      userData.innerHTML += `<tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td><button class="remo">DEL</button></td>
        </tr>`;
    });
  }
};
newUser();
userData.addEventListener("click", function (e) {
  // Nếu cái mà bạn click vào có class là 'btn-remove'
  if (e.target.classList.contains("remo")) {
    // Tìm thẻ <tr> cha gần nhất của nút đó và xóa nó
    const row = e.target.closest("tr");
    row.remove();
  }
});
