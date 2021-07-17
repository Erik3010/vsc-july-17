const resultContainer = document.querySelector("#result h1");
const inputCount = document.querySelector("#input-count");
const randomBtn = document.querySelector("#random-btn");

const lastResult = [];

const random = (min, max) => ~~(Math.random() * (max - min + 1) + min);

randomBtn.addEventListener("click", () => {
  resultContainer.style.color = "black";
  const maxVal = inputCount.value;
  const interval = setInterval(() => {
    resultContainer.innerHTML = random(1, maxVal);
  }, 10);
  setTimeout(() => {
    clearInterval(interval);
    let expectedResult = random(1, maxVal);

    while (lastResult.includes(expectedResult))
      expectedResult = random(1, maxVal);

    resultContainer.innerHTML = expectedResult;
    resultContainer.style.color = "green";

    lastResult.push(expectedResult);
  }, 3000);
});
