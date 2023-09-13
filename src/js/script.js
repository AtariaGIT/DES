import Swiper from "../../node_modules/swiper/swiper-bundle.min.mjs";

const swiper1 = new Swiper('.swiper',{
  direction: "horizontal",
  loop: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    typeof: "bullets",
    clickable: true
  }
});

const swiper2 = new Swiper('.swiper-2', {
  direction: "horizontal",
  loop: "true",
  speed: 10000,
  autoplay: {
    delay: 1000,
  },
})


document.getElementById('mobile-menu-button').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});


