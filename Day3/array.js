const arrName = ["G", "H", "T"];
// console.log(arrName);
// arrName[1] = "D";
// console.log(arrName);
// arrName.push("A");
// console.log(arrName);
// arrName.unshift("F");
// console.log(arrName);
// arrName.pop();
// console.log(arrName);
// arrName.shift();
// console.log(arrName);
console.log(arrName, arrName.length);
for (let i = 0; i < arrName.length; i++) {
  console.log(arrName[i]);
}

console.log("-------------------");

arrName.forEach((a, b) => {
  console.log(a, b);
});

console.log("-------------------");

const arrNameLop = arrName.map((a, b) => {
  return a + 1;
});
// ket qua giong doan tren
// const arrNameLop = arrName.map((a, b) => a+1);
console.log(arrNameLop);
console.log("-------------------");
const ages = [2, 3, 5, 7, 8, 9, 12];
const agesx2 = ages.map((a, b) => {
  return a * 2;
});
console.log(ages, agesx2);

const agesx2than8 = ages.filter((a, b) => {
  return a > 5;
});
console.log(agesx2than8);
