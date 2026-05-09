const progress = document.querySelector(".progress");
const item = document.querySelectorAll(".item");
const acti = document.querySelector(".acti");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

const slideImg = document.querySelector(".slideImg");
const container = document.querySelector(".container");
const panel = document.querySelectorAll(".panel");

let current = 0;
function updateProgress() {
  const percent = (current / (item.length - 1)) * 100;
  progress.style.width = percent + "%";
  progress.style.transition = "1s";
}
btnNext.addEventListener("click", () => {
  if (current < item.length - 1) {
    current++;
    updateProgress();
  }
  item.forEach((step, idx) => {
    if (idx <= current) {
      step.classList.add("acti");
    }
  });
  removeActiveClasses();
  if (panel[current]) {
    panel[current].classList.add("active");
  }
  console.log(current);
});

btnPrev.addEventListener("click", () => {
  if (current > 0) {
    current--;
    updateProgress();
  }
  item.forEach((step, idx) => {
    if (idx > current) {
      step.classList.remove("acti");
    }
  });
  removeActiveClasses();
  if (panel[current]) {
    panel[current].classList.add("active");
  }
  console.log(current);
});

//slide
for (let i = 0; i < panel.length; i++) {
  panel[i].style.backgroundImage = `url(images/car${i + 1}.jpg)`;
}
container.addEventListener("click", (e) => {
  const newActive = e.target;
  console.log(newActive);
  if (newActive.classList.contains("panel")) {
    removeActiveClasses();
    newActive.classList.add("active");
  }
});
function removeActiveClasses() {
  panel.forEach((p) => {
    p.classList.remove("active");
  });
}
