console.log("111");
setTimeout(() => {
  console.log("222");
}, 3000);
console.log("333");

const myPromise = () => {
  return new Promise((resolve, reject) => {});
};
