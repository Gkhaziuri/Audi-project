const swiper = new Swiper('.swiper', {
    autoplay: {
       delay: 3000, 
       disableOnInteraction: false,
    },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: "fade",
});

// menu hover
function scrollToSection(sectionId) {
  const hoverBlock = document.querySelector(".burger-icon-hover-block")
  window.scrollTo ({
  
    behavior: "smooth",
  });
  hoverBlock.style.display = "none"
}


