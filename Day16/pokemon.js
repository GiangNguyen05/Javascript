const container = document.querySelector("#container");
for (let i = 1; i <= 151; i++) {
  const image = document.createElement("img");
  image.src = `https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/${i}.png
`;
  console.log(image);
  container.append(image);
}
