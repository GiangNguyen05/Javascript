function hello(name, callback) {
  console.log("toi ten la: ", name);
  callback();
}

const hi = () => {
  console.log("ABC");
};
const hey = () => {
  console.log("DGF");
};

hello("Giang", hi);
hello("GIANG", hey);
