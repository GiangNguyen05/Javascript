const student = {
  fullName: "G",
  birthYear: 2000,
  address: {
    city: "Da Nang",
    country: "Tam Xuan",
  },
  core: [8, 9, 8],
  getAge: () => {
    return 2026 - this.birthYear;
  },
  diemTrungBing: () => {
    const sum = this.core.reduce((a, b) => a + b, 0);
    return sum / 3;
  },
};

const sinhVien = function (a, b, c, d) {
  this.fullName = a;
  this.ID = b;
  this.birthYear = c;
  this.homeTown = d;
  //phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.birthYear} ${this.homeTown}`;
  };
};
const sv1 = new sinhVien("H", "1", 2000, "Da Nang");
console.log(sv1);
sinhVien.prototype.getAge = function () {
  console.log(2026 - this.birthYear);
};
sv1.getAge();
//class es6
// class sinhVienn {
//   constructor(fullName, id, birthYear, homeTown) {
//     this.fullName = fullName;
//     this.id = id;
//     this.birthYear = birthYear;
//     this.homeTown = homeTown;
//   }
//   //phương thức, không cần dùng this và function
//   showInfo() {
//     return `${this.fullName} ${this.id} ${this.birthYear} ${this.homeTown}`;
//   }
// }
// const sv2 = new sinhVienn("H", 2, 2000, "Tam Xuan");
// console.log(sv2);
// console.log(sv2.showInfo());

class sVien {
  constructor(fullName, id, birthYear, homeTown) {
    this.fullName = fullName;
    this.id = id;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
  }

  //Phuong thuc instance method

  draw() {
    console.log("Ghi thong tin");
  }
}
const s1 = new sVien("G", 1, 2000, "TX");
console.log(s1.draw());
