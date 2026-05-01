class Wallet {
  #pin; //private
  #balance; //private
  #isPin = false; //private
  constructor(name, pin) {
    this.name = name;
    this.#pin = pin;
    this.#balance = 0;
  }
  deposit(value) {
    if (!this.#isPin) {
      console.log("Nhap lai Pin");
      return;
    }
    this.#balance += value;
  }
  // private method
  #validate(pin) {
    return this.#pin === pin;
  }

  // public method
  enterPin(pin) {
    if (this.#validate(pin)) {
      this.#isPin = true;
    } else {
      console.log("Invalid Pin");
    }
  }
  withdraw(value) {
    if (!this.#isPin) {
      console.log("Nhap lai Pin");
      return;
    }
    if (this.#balance < value) {
      console.log("Tai khoan khong du");
    } else {
      this.#balance -= value;
      console.log(this.#balance);
    }
  }
  // private nen phai dung get moi lay duoc ket qua in ra
  get balance() {
    if (!this.#isPin) {
      console.log("Nhap lai Pin");
      return;
    }
    return this.#balance;
  }
}

const wallet = new Wallet("Giang", 1234);
wallet.enterPin(1234);
wallet.deposit(10000);
wallet.withdraw(20000);
console.log(wallet.balance);

// bài mớii

const timeNow = () => {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0"); //nếu chuỗi không đủ 2 số sẽ thêm dấu 0 đằng trc
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const toString = `${hour} : ${minutes} : ${seconds}`;
  document.getElementById("clock").innerHTML = toString;
};
setInterval(timeNow, 1000);

// getAttribute/setAttribute
const firstLink = document.querySelector("a");
if (firstLink) {
  const newHref = firstLink.getAttribute("href");
  console.log(newHref);
} else {
  console.log("khong co");
}

firstLink.setAttribute("target", "_blank");
const list = document.querySelectorAll(".list li");
list.forEach((item) => {
  Object.assign(item.style, {
    backgroundColor: "red",
    fontSize: "1rem",
  });
});
