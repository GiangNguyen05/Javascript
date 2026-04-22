console.log("Hello word");

const age = 10;

if (age > 10) {
  console.log("ok");
} else if (age > 5 && age < 9) {
  console.log("no ok");
} else {
  console.log("wait");
}

console.log("---------------");

const score = 10;
switch (score) {
  case 5:
    console.log("trung binh");
    break;
  case 6:
    console.log("kha");
    break;
  case 10:
    console.log("gioi");
    break;
  default:
    console.log("yeu");
}

console.log("---------------");

const arryName = [`giang`, `han`, `bin`, `ban`];
for (let name = 0; name < arryName.length; name++) {
  console.log(arryName[name]);
}
// while (arryName.length < 5) {}
// do {} while (condition);
console.log("---------------");
for (let name = 0; name < arryName.length; name++) {
  console.log(arryName[name]);
  if (name === 2) {
    break;
  }
}
