//promise
fetch("http://localhost:8000/blogs")
  .then((res) => res.json())
  .then((data) => console.log(data));

//async/await

const getData = async () => {
  const res = await fetch("http://localhost:8000/blogs");
  const data = await res.json();
  console.log(data);
};
getData();
