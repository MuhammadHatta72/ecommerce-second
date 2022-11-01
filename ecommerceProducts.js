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

//Shirts
const shirtSliderWrapper = document.querySelector(".shirts-row");
let shirtSlider = 0;
let shirtSliderIndex = 0;
let choosenShirtSlider = shirtSlider[shirtSliderIndex];
let xMobileShirt = window.matchMedia("(max-width: 576px)");

if (xMobileShirt.matches) {
  //Mobile
  shirtSlider = 9;
} else {
  //Desktop
  shirtSlider = 2;
}

//Check Device
xMobileShirt.addEventListener("change", () => {
  if (xMobileShirt.matches) {
    //Mobile
    shirtSlider = 9;
    shirtSliderIndex = 0;
    showProductShirt(shirtSliderIndex);
  } else {
    //Desktop
    shirtSlider = 2;
    shirtSliderIndex = 0;
    showProductShirt(shirtSliderIndex);
  }
});

showProductShirt(shirtSliderIndex);

function plusProductShirt(n) {
  if (shirtSliderIndex < shirtSlider) {
    showProductShirt((shirtSliderIndex += n));
  }
}

function minProductShirt(n) {
  if (shirtSliderIndex > 0) {
    showProductShirt((shirtSliderIndex += n));
  }
}

function showProductShirt(index) {
  //change the current Product
  shirtSliderWrapper.style.transform = `translateX(${-50 * index}vw)`;

  //change the choosen product
  choosenShirtSlider = shirtSlider[index];
}

//Jackets
const jacketSliderWrapper = document.querySelector(".jackets-row");
let jacketSlider = 0;
let jacketSliderIndex = 0;
let choosenjacketSlider = jacketSlider[jacketSliderIndex];
let xMobileJacket = window.matchMedia("(max-width: 576px)");

if (xMobileJacket.matches) {
  //Mobile
  jacketSlider = 9;
} else {
  //Desktop
  jacketSlider = 2;
}

//Check Device
xMobileJacket.addEventListener("change", () => {
  if (xMobileJacket.matches) {
    //Mobile
    jacketSlider = 9;
    jacketSliderIndex = 0;
    showProductJacket(jacketSliderIndex);
  } else {
    //Desktop
    jacketSlider = 2;
    jacketSliderIndex = 0;
    showProductJacket(jacketSliderIndex);
  }
});

showProductJacket(jacketSliderIndex);

function plusProductJacket(n) {
  if (jacketSliderIndex < jacketSlider) {
    showProductJacket((jacketSliderIndex += n));
  }
}

function minProductJacket(n) {
  if (jacketSliderIndex > 0) {
    showProductJacket((jacketSliderIndex += n));
  }
}

function showProductJacket(index) {
  //change the current Product
  jacketSliderWrapper.style.transform = `translateX(${-50 * index}vw)`;

  //change the choosen product
  choosenjacketSlider = jacketSlider[index];
}

//Trouserss
const trousersSliderWrapper = document.querySelector(".trouserss-row");
let trousersSlider = 0;
let trousersSliderIndex = 0;
let choosenTrousersSlider = trousersSlider[trousersSliderIndex];
let xMobileTrousers = window.matchMedia("(max-width: 576px)");

if (xMobileTrousers.matches) {
  //Mobile
  trousersSlider = 9;
} else {
  //Desktop
  trousersSlider = 2;
}

//Check Device
xMobileTrousers.addEventListener("change", () => {
  if (xMobileTrousers.matches) {
    //Mobile
    trousersSlider = 9;
    trousersSliderIndex = 0;
    showProductTrousers(trousersSliderIndex);
  } else {
    //Desktop
    trousersSlider = 2;
    trousersSliderIndex = 0;
    showProductTrousers(trousersSliderIndex);
  }
});

showProductTrousers(trousersSliderIndex);

function plusProductTrousers(n) {
  if (trousersSliderIndex < trousersSlider) {
    showProductTrousers((trousersSliderIndex += n));
  }
}

function minProductTrousers(n) {
  if (trousersSliderIndex > 0) {
    showProductTrousers((trousersSliderIndex += n));
  }
}

function showProductTrousers(index) {
  //change the current Product
  trousersSliderWrapper.style.transform = `translateX(${-50 * index}vw)`;

  //change the choosen product
  choosenTrousersSlider = trousersSlider[index];
}

//Shoes
const shoesSliderWrapper = document.querySelector(".shoess-row");
let shoesSlider = 0;
let shoesSliderIndex = 0;
let choosenShoesSlider = shoesSlider[shoesSliderIndex];
let xMobileShoes = window.matchMedia("(max-width: 576px)");

if (xMobileShoes.matches) {
  //Mobile
  shoesSlider = 9;
} else {
  //Desktop
  shoesSlider = 2;
}

//Check Device
xMobileShoes.addEventListener("change", () => {
  if (xMobileShoes.matches) {
    //Mobile
    shoesSlider = 9;
    shoesSliderIndex = 0;
    showProductShoes(shoesSliderIndex);
  } else {
    //Desktop
    shoesSlider = 2;
    shoesSliderIndex = 0;
    showProductShoes(shoesSliderIndex);
  }
});

showProductShoes(shoesSliderIndex);

function plusProductShoes(n) {
  if (shoesSliderIndex < shoesSlider) {
    showProductShoes((shoesSliderIndex += n));
  }
}

function minProductShoes(n) {
  if (shoesSliderIndex > 0) {
    showProductShoes((shoesSliderIndex += n));
  }
}

function showProductShoes(index) {
  //change the current Product
  shoesSliderWrapper.style.transform = `translateX(${-50 * index}vw)`;

  //change the choosen product
  choosenShoesSlider = shoesSlider[index];
}

// ModalShirt
let modalShirt = document.querySelector(".modalShirt");
let buttonModalShirt = document.querySelectorAll(".shirtButton");
let buttonCloseShirt = document.querySelector(".closeShirt");

buttonModalShirt.forEach((button) => {
  button.addEventListener("click", () => {
    modalShirt.style.display = "block";
  });
});

buttonCloseShirt.addEventListener("click", function () {
  modalShirt.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modalShirt) {
    modalShirt.style.display = "none";
  }
});

// ModalJacket
let modalJacket = document.querySelector(".modalJacket");
let buttonModalJacket = document.querySelectorAll(".jacketButton");
let buttonCloseJacket = document.querySelector(".closeJacket");

buttonModalJacket.forEach((button) => {
  button.addEventListener("click", () => {
    modalJacket.style.display = "block";
  });
});

buttonCloseJacket.addEventListener("click", function () {
  modalJacket.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modalJacket) {
    modalJacket.style.display = "none";
  }
});

// ModalTrousers
let modalTrousers = document.querySelector(".modalTrousers");
let buttonModalTrousers = document.querySelectorAll(".trousersButton");
let buttonCloseTrousers = document.querySelector(".closeTrousers");

buttonModalTrousers.forEach((button) => {
  button.addEventListener("click", () => {
    modalTrousers.style.display = "block";
  });
});

buttonCloseTrousers.addEventListener("click", function () {
  modalTrousers.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modalTrousers) {
    modalTrousers.style.display = "none";
  }
});

// ModalShoes
let modalShoes = document.querySelector(".modalShoes");
let buttonModalShoes = document.querySelectorAll(".shoesButton");
let buttonCloseShoes = document.querySelector(".closeShoes");

buttonModalShoes.forEach((button) => {
  button.addEventListener("click", () => {
    modalShoes.style.display = "block";
  });
});

buttonCloseShoes.addEventListener("click", function () {
  modalShoes.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modalShoes) {
    modalShoes.style.display = "none";
  }
});
