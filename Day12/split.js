// const str = "123AbcDD";
// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (char >= "a" && char <= "z") {
//     console.log("chữ thường");
//   } else if (char >= "A" && char <= "Z") {
//     console.log("chữ hoa");
//   } else if (char >= "0" && char <= "9") {
//     console.log("chữ số");
//   } else if (char >= "") {
//     console.log("dấu space");
//   }
// }
const pass = document.querySelector("#pass");
const btn = document.querySelector("#btn");
const passLogin = document.querySelector("#passLogin");
const btnLogin = document.querySelector("#btnLogin");
let passMain = "";
const isPassWord = (passWord) => {
  if (passWord.length < 6) {
    return false;
  }
  let upper = false;
  let lower = false;
  let num = false;
  for (let i = 0; i < passWord.length; i++) {
    let char = passWord[i];
    if (char >= "a" && char <= "z") {
      lower = true;
    } else if (char >= "A" && char <= "Z") {
      upper = true;
    } else if (char >= "0" && char <= "9") {
      num = true;
    }
  }
  return upper && lower && num;
};
btn.addEventListener("click", function setPass() {
  let passWord = pass.value;
  if (isPassWord(passWord)) {
    passMain = passWord;
    alert("SUCCESS " + passWord);
  } else {
    alert("ERROR " + passWord);
  }
});
btnLogin.addEventListener("click", () => {
  let passLog = passLogin.value;
  if (passLog === passMain) {
    alert("Open");
  } else {
    alert("close");
  }
});
