// On Scroll Header
window.onscroll = function () {
  scrollFunction();
};

const header = document.querySelector("nav");
const sticky = header.offsetTop;

function scrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("navScroll");
  } else {
    header.classList.remove("navScroll");
  }
}

//Top Navigation Bar
const topMenuToggle = document.querySelector(".topnav input");
const menu = document.querySelector("nav ul");

topMenuToggle.addEventListener("click", function () {
  menu.classList.toggle("activeSlide");
});

//Slider
const wrapper = document.querySelector(".sliderWrapper");
// const menuItems = document.querySelectorAll(".menuItem");
const products = 4;
let slideIndex = 0;
let choosenProduct = products[slideIndex];

showSlide(slideIndex);

function plusDivs(n) {
  if (slideIndex < products) {
    showSlide((slideIndex += n));
  }
}

function minDivs(n) {
  if (slideIndex > 0) {
    showSlide((slideIndex += n));
  }
}

function showSlide(index) {
  //change the current slide
  wrapper.style.transform = `translateX(${-100 * index}vw)`;

  //change the choosen product
  choosenProduct = products[index];
}

//Products
const productSliderWrapper = document.querySelector(".products-row");
let productSlider = 0;
let productSliderIndex = 0;
let choosenproductSlider = productSlider[productSliderIndex];
let xMobile = window.matchMedia("(max-width: 576px)");

if (xMobile.matches) {
  //Mobile
  productSlider = 9;
} else {
  //Desktop
  productSlider = 2;
}

//Check Device
xMobile.addEventListener("change", () => {
  if (xMobile.matches) {
    //Mobile
    productSlider = 9;
    productSliderIndex = 0;
    showProduct(productSliderIndex);
  } else {
    //Desktop
    productSlider = 2;
    productSliderIndex = 0;
    showProduct(productSliderIndex);
  }
});

showProduct(productSliderIndex);

function plusProduct(n) {
  if (productSliderIndex < productSlider) {
    showProduct((productSliderIndex += n));
  }
}

function minProduct(n) {
  if (productSliderIndex > 0) {
    showProduct((productSliderIndex += n));
  }
}

function showProduct(index) {
  //change the current Product
  productSliderWrapper.style.transform = `translateX(${-50 * index}vw)`;

  //change the choosen product
  choosenproductSlider = productSlider[index];
}

//Testimonial
const testimonialWrapper = document.querySelector(".testimonials-row");
const testimonial = 1;
let testimonialIndex = 0;
let choosenTestimonial = testimonial[testimonialIndex];

showTesti(testimonialIndex);

function plusTesti(n) {
  if (testimonialIndex < testimonial) {
    showTesti((testimonialIndex += n));
  }
}

function minTesti(n) {
  if (testimonialIndex > 0) {
    showTesti((testimonialIndex += n));
  }
}

function showTesti(index) {
  //change the current Testi
  testimonialWrapper.style.transform = `translateX(${-100 * index}vw)`;

  //change the choosen product
  choosenTestimonial = testimonial[index];
}

// Modal
let modal = document.querySelector(".modal");
let buttonModal = document.querySelectorAll(".productButton");
let buttonClose = document.querySelector(".close");

buttonModal.forEach((button) => {
  button.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

buttonClose.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
