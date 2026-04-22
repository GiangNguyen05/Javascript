const userName = document.querySelector("#name");
const passWord = document.querySelector("#password");
const btn = document.querySelector("#login");
const myName = document.querySelector("#my-name");
const myPass = document.querySelector("#my-pass");
btn.addEventListener("click", () => {
  if (userName.value === "giang nguyen" && passWord.value === "2805") {
    alert("Đăng nhập thành công");
    window.location.href = "success.html";
  } else {
    alert("Tài khoản hoặc mật khẩu sai");
    userName.style.borderColor = "red";
    passWord.style.borderColor = "red";
  }
  localStorage.setItem("Giang", userName.value);
  localStorage.setItem("Giang", passWord.value);
});
const prev = localStorage.getItem("Giang");
myName.innerHTML = prev;
myPass.innerHTML = prev;
