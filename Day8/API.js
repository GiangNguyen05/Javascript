const temp = fetch("http://localhost:8000/blogs");
console.log(temp);
console.log("================");
temp.then((data) => data.json()).then((d) => console.log(d)); //json(): cŨng là một promise nên tiếp tục gọi then
