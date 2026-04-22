const person = {
  name1: "G",
  age: 10,
};
console.log(person);

const listStudent = {
  name1: "H",
  age: 10,
  address: {
    city: "Da Nang",
    country: "Viet Nam",
  },
};
console.log(listStudent);
console.log("=====================");
const list = [person, listStudent];
console.log(list);
console.log(person.name1); // đã có thì js sẽ hiểu là ta lấy data
person.address = "Quang Nam"; // chưa có thì js hiểu ta thêm data
console.log(person);
delete person.name1;
console.log(person);
console.log("=====================");

const sv1 = {
  username: "G",
  scores: 10,
};
const sv2 = {
  username: "H",
  scores: 20,
};
const sv3 = {
  username: "T",
  scores: 30,
};
const sinhVien = [sv1, sv2, sv3];
const sv4 = {
  username: "N",
  scores: 40,
};
sinhVien.push(sv4);
console.log(sinhVien);
console.log("=====================");
// sinhVien.forEach((value, index) => {
//   console.log(value.scores);
// });

// const newScores = sinhVien.map((item) => {
//   return item.scores * 2;
// });
// console.log(newScores);
for (let key in sv1) {
  console.log(key, sv1[key]);
}
console.log("=====================");
for (let value of Object.values(sv2)) {
  console.log(value);
}
