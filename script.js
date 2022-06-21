$(document).ready(function () {
  $("#revSlider").lightSlider({
    autoWidth: true,
    auto: true,
    freeMove: false,
    loop: true,
    pauseOnHover: true,
    pause: 3000,
    speed: 1000,
    pager: false,
    onSliderLoad: function () {
      $("#carSlider").removeClass("cS-hidden");
    },
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 2,
          slideMove: 1,
        },
      },
    ],
  });
});

let modalCars = document.querySelector(".car-cards-modal");
let closeButton = document.querySelector(".car-cards-modal .close-btn");

let car1 = document.querySelector("#car1");

let modalCar1 = document.querySelector("#modalCar1");

car1.addEventListener("click", () => {
  modalCars.style.display = "flex";
  modalCar1.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  modalCars.style.display = "none";
  modalCar1.style.display = "none";
});
