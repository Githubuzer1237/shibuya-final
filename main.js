const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const swiperAlbum1 = new Swiper(".swiper-album-1", {
  loop: true,
  slidesPerView: 0.3,
  spaceBetween: 8,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  breakpoints: {
    500: {
      slidesPerView: 0.4,
    },

    700: {
      slidesPerView: 0.5,
    },

    900: {
      slidesPerView: 0.6,
    },
  },

  allowTouchMove: false,

  speed: 20000,
});

const swiperAlbum2 = new Swiper(".swiper-album-2", {
  loop: true,
  slidesPerView: 0.3,
  spaceBetween: 8,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },

  breakpoints: {
    500: {
      slidesPerView: 0.4,
    },

    700: {
      slidesPerView: 0.5,
    },

    900: {
      slidesPerView: 0.6,
    },
  },

  allowTouchMove: false,

  speed: 20000,
});

const swiperTeam = new Swiper(".team__swiper", {
  // Optional parameters
  // loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  centeredSlides: true,
  initialSlide: 2,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const cards = document.querySelectorAll(".value__card");
const cardsContainer = document.querySelector(".value__cards");
const watafak = document.querySelector(".watafak");


cards.forEach((card, index) => {
  card.addEventListener("mouseover", () => {
    if (index === 0) {
      cardsContainer.style.gridTemplateColumns = "3fr 1fr 1fr 1fr";
      
    } else if (index === 1) {
      cardsContainer.style.gridTemplateColumns = "1fr 3fr 1fr 1fr";
    } else if (index === 2) {
      cardsContainer.style.gridTemplateColumns = "1fr 1fr 3fr 1fr";
    } else if (index === 3) {
      cardsContainer.style.gridTemplateColumns = "1fr 1fr 1fr 3fr";
    

    }
  });

  card.addEventListener("mouseout", () => {
    cardsContainer.style.gridTemplateColumns = "3fr 1fr 1fr 1fr";
  });
});
