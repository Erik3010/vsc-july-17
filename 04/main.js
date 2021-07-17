const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const sliderContainer = document.querySelector(".slider-item-container");

const imageCount = document.querySelectorAll(".slider-item-container img").length;

let count = 0;

const animate = (inc = 1) => {
  count+=inc;
  sliderContainer.style.marginLeft = `${-(count * 100)}%`

  btnCheck()
}

const btnCheck = () => {
  if(count === imageCount -1) nextBtn.style.display = 'none'
  else if (count === 0) prevBtn.style.display = 'none';
  else {
    nextBtn.style.display = 'block'
    prevBtn.style.display = 'block'
  }
}

nextBtn.addEventListener("click", () => {
  animate(1)
})

prevBtn.addEventListener("click", () => {
  animate(-1)
})

btnCheck()
