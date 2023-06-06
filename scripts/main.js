const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
    draggable: true,
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

const links = document.querySelectorAll(".page a");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    links.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});
