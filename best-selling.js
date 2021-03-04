var bslide = document.getElementById("slider-best");
var bbtn1 = document.getElementById("bbtn1");
var bbtn2 = document.getElementById("bbtn2");
var btn3 = document.getElementById("bbtn3");
var bbtn4 = document.getElementById("bbtn4");

btn1.onclick = function () {
    bslide.style.transform = "translateX(0px)";
    bbtn1.classList.add('best-active');
    bbtn2.classList.remove('best-active');
    bbtn3.classList.remove('best-active');
    bbtn4.classList.remive('best-active');
};
btn2.onclick = function () {
    bslide.style.transform = "translateX(-100%)";
    bbtn1.classList.remove('best-active');
    bbtn2.classList.add('best-active');
    bbtn3.classList.remove('best-active');
    bbtn4.classList.remove('best-active');
};
btn3.onclick = function () {
    bslide.style.transform = "translateX(-200%)";
    bbtn1.classList.remove('best-active');
    bbtn2.classList.remove('best-active');
    bbtn3.classList.add('best-active');
    bbtn4.classList.remove('best-active');
};
btn4.onclick = function () {
    bslide.style.transform = "translateX(-300%)";
    bbtn1.classList.remove('best-active');
    bbtn2.classList.remove('best-active');
    bbtn3.classList.remove('best-active');
    bbtn4.classList.add('best-active');
};