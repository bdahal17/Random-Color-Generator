"use strict";
const box = document.getElementById("box1");
const button = document.getElementById("button");
const random1 = Math.trunc(Math.random() * 9);
const random2 = Math.trunc(Math.random() * 9);
const random3 = Math.trunc(Math.random() * 9);
const random4 = Math.trunc(Math.random() * 9);

const rgb = "#FF";
const adding = rgb + random1 + random2 + random3 + random4;
const change = button.addEventListener("click", function () {
  box.style.backgroundColor = adding;
});
const reset = () => {
  box.style.backgroundColor = "red";
};
if (change) {
  reset();
}
