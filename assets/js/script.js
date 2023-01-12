const swiper = new Swiper(".swiper", {
  // Optional parameters,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

var currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// const init = (n) => {
//   slides.forEach((slide) => {
//     slide.style.display = "none";
//     dots.forEach((dot) => {
//       dot.classList.remove("active");
//     });
//   });
const init = (n) => {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  currentSlide++;
  if (currentSlide > slides.length) {
    currentSlide = 1;
  }
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  slides[currentSlide - 1].style.display = "block";
  dots[currentSlide - 1].className += " active";
  setTimeout(init, 10000); // Change image every 2 seconds
};

document.addEventListener("DOMContentLoaded", init(currentSlide));
const next = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};

const prev = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
};

document.querySelector(".next").addEventListener("click", next);
document.querySelector(".prev").addEventListener("click", prev);
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    init(index);
    currentSlide = index;
  });
});
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    init(index);
    currentSlide = index;
  });
});

const swiper2 = new Swiper(".swiper2", {
  autoplay: true,
  centeredSlides: true,

  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  // And if we need scrollbar
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    // 326
    // 260.8+293.4+260.8
  },
});
const playVideo=()=> {
  var img = document.getElementById("video1Btn");
  var videoEl = document.getElementsByTagName('video')[0];
  var sourceEl = videoEl.getElementsByTagName('source')[0];
  sourceEl.src = './assets/img/video.mp4';
  videoEl.load();
 }
