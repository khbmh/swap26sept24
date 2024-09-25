let me = 0;
const one = "First Text";
const two = "Second Text";

document.getElementById("btn").addEventListener("click", function () {
  const oneElement = document.querySelector(".one");
  const twoElement = document.querySelector(".two");


  if (me === 0) {
    oneElement.innerText = one;
    twoElement.innerText = two;
    twoElement.classList.add('blue');
    oneElement.classList.remove('blue');
    me = 1;
  } else {
    oneElement.innerText = two;
    oneElement.classList.add('blue');
    twoElement.classList.remove('blue');
    twoElement.innerText = one;
    me = 0;
  }

});