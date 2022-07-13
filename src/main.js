import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const header = document.getElementById("header");

if (bar) {
  bar.addEventListener("click", function () {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}

let lastKnownScrollPosition = 0;
let ticking = false;

function backgroundWhiteOnScroll() {
  header.classList.add("scrollActive");
}
function backgroundTransparentOnReturn() {
  header.classList.remove("scrollActive");
}

document.addEventListener("scroll", function () {
  lastKnownScrollPosition = window.scrollY;
  console.log(lastKnownScrollPosition);
  if (lastKnownScrollPosition < 10) {
    // window.cancelAnimationFrame(function() {

    // });
    backgroundTransparentOnReturn();
  } else if (!ticking) {
    window.requestAnimationFrame(function () {
      ticking = false;
    });
    backgroundWhiteOnScroll();
    ticking = true;
  }
});

// ***********************************

//Get the button:
const mybutton = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

const button1 = document.getElementById("El1");
const button2 = document.getElementById("El2");
const button3 = document.getElementById("El3");
const button4 = document.getElementById("El4");
const button5 = document.getElementById("El5");
const button6 = document.getElementById("El6");
const content1 = document.getElementById("accordionExample1");
const content2 = document.getElementById("accordionExample2");
const content3 = document.getElementById("accordionExample3");
const content4 = document.getElementById("accordionExample4");
const content5 = document.getElementById("accordionExample5");
const content6 = document.getElementById("accordionExample6");

if (button1) {
  button1.addEventListener("click", function () {
    content2.classList.add("hidden");
    content3.classList.add("hidden");
    content4.classList.add("hidden");
    content5.classList.add("hidden");
    content6.classList.add("hidden");
    content2.classList.remove("active");
    content3.classList.remove("active");
    content4.classList.remove("active");
    content5.classList.remove("active");
    content6.classList.remove("active");
    content1.classList.add("active");
  });
}

if (button2) {
  button2.addEventListener("click", function () {
    content1.classList.remove("active");
    content1.classList.add("hidden");
    content2.classList.remove("hidden");
    content3.classList.remove("active");
    content4.classList.remove("active");
    content5.classList.remove("active");
    content6.classList.remove("active");
  });
}

if (button3) {
  button3.addEventListener("click", function () {
    content2.classList.remove("active");
    content2.classList.add("hidden");
    content1.classList.remove("active");
    content1.classList.add("hidden");
    content4.classList.remove("active");
    content4.classList.add("hidden");
    content5.classList.remove("active");
    content5.classList.add("hidden");
    content6.classList.remove("active");
    content6.classList.add("hidden");
    content3.classList.add("active");
  });
}

if (button4) {
  button4.addEventListener("click", function () {
    content2.classList.remove("active");
    content2.classList.add("hidden");
    content1.classList.remove("active");
    content1.classList.add("hidden");
    content3.classList.remove("active");
    content3.classList.add("hidden");
    content5.classList.remove("active");
    content5.classList.add("hidden");
    content6.classList.remove("active");
    content6.classList.add("hidden");
    content4.classList.add("active");
  });
}

if (button5) {
  button5.addEventListener("click", function () {
    content2.classList.remove("active");
    content2.classList.add("hidden");
    content1.classList.remove("active");
    content1.classList.add("hidden");
    content3.classList.remove("active");
    content3.classList.add("hidden");
    content4.classList.remove("active");
    content4.classList.add("hidden");
    content6.classList.remove("active");
    content6.classList.add("hidden");
    content5.classList.add("active");
  });
}

if (button6) {
  button6.addEventListener("click", function () {
    content2.classList.remove("active");
    content2.classList.add("hidden");
    content1.classList.remove("active");
    content1.classList.add("hidden");
    content3.classList.remove("active");
    content3.classList.add("hidden");
    content4.classList.remove("active");
    content4.classList.add("hidden");
    content5.classList.remove("active");
    content5.classList.add("hidden");
    content6.classList.add("active");
  });
}
