new WOW().init();
(function () {
  var autoUpdate = false,
    timeTrans = 4000;

  var cdSlider = document.querySelector(".cd-slider"),
    item = cdSlider.querySelectorAll("li"),
    nav = cdSlider.querySelector("nav");

  item[0].className = "current_slide";

  for (var i = 0, len = item.length; i < len; i++) {
    var color = item[i].getAttribute("data-color");
    item[i].style.backgroundColor = color;
  }

  // Detect IE
  // hide ripple effect on IE9
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE");
  if (msie > 0) {
    var version = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
    if (version === 9) {
      cdSlider.className = "cd-slider ie9";
    }
  }

  if (item.length <= 1) {
    nav.style.display = "none";
  }

  function prevSlide() {
    var currentSlide = cdSlider.querySelector("li.current_slide"),
      prevElement = currentSlide.previousElementSibling,
      prevSlide = prevElement !== null ? prevElement : item[item.length - 1],
      prevColor = prevSlide.getAttribute("data-color"),
      el = document.createElement("span");

    currentSlide.className = "";
    prevSlide.className = "current_slide";

    nav.children[0].appendChild(el);

    var size =
        cdSlider.clientWidth >= cdSlider.clientHeight
          ? cdSlider.clientWidth * 2
          : cdSlider.clientHeight * 2,
      ripple = nav.children[0].querySelector("span");

    ripple.style.height = size + "px";
    ripple.style.width = size + "px";
    ripple.style.backgroundColor = prevColor;

    ripple.addEventListener("webkitTransitionEnd", function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    });

    ripple.addEventListener("transitionend", function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    });
  }

  function nextSlide() {
    var currentSlide = cdSlider.querySelector("li.current_slide"),
      nextElement = currentSlide.nextElementSibling,
      nextSlide = nextElement !== null ? nextElement : item[0],
      nextColor = nextSlide.getAttribute("data-color"),
      el = document.createElement("span");

    currentSlide.className = "";
    nextSlide.className = "current_slide";

    nav.children[1].appendChild(el);

    var size =
        cdSlider.clientWidth >= cdSlider.clientHeight
          ? cdSlider.clientWidth * 2
          : cdSlider.clientHeight * 2,
      ripple = nav.children[1].querySelector("span");

    ripple.style.height = size + "px";
    ripple.style.width = size + "px";
    ripple.style.backgroundColor = nextColor;

    ripple.addEventListener("webkitTransitionEnd", function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    });

    ripple.addEventListener("transitionend", function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    });
  }

  updateNavColor();

  function updateNavColor() {
    var currentSlide = cdSlider.querySelector("li.current_slide");

    var nextColor =
      currentSlide.nextElementSibling !== null
        ? currentSlide.nextElementSibling.getAttribute("data-color")
        : item[0].getAttribute("data-color");
    var prevColor =
      currentSlide.previousElementSibling !== null
        ? currentSlide.previousElementSibling.getAttribute("data-color")
        : item[item.length - 1].getAttribute("data-color");

    if (item.length > 2) {
      nav.querySelector(".prev").style.backgroundColor = prevColor;
      nav.querySelector(".next").style.backgroundColor = nextColor;
    }
  }

  nav.querySelector(".next").addEventListener("click", function (event) {
    event.preventDefault();
    nextSlide();
    updateNavColor();
  });

  nav.querySelector(".prev").addEventListener("click", function (event) {
    event.preventDefault();
    prevSlide();
    updateNavColor();
  });

  //autoUpdate
  setInterval(function () {
    if (autoUpdate) {
      nextSlide();
      updateNavColor();
    }
  }, timeTrans);
})();
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

const swiper3 = new Swiper(".swiper3", {
  autoplay: true,
  centeredSlides: true,

  // Optional parameters
  loop: true,
  // If we need pagination

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
// Video Player
const video = document.querySelector("#promotion__video");
const play__btn = document.querySelector("#btn_play");

play__btn.addEventListener("click", () => {
  video.play();
  play__btn.style.display = "none";
});
video.onended = () => {
  play__btn.style.display = "block";
};
