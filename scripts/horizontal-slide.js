import selectPropertyAction , { ageType, weightType } from "./redux.js";
import { createTest } from "./helpers.js";


// swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters  loop: true,
  slidesPerView:1,
  loop:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export const checkisVisible = (element)=>{
  const rect = element.getBoundingClientRect();

  if (rect.left <= window.innerWidth) {
     element.classList.add('active')
     console.log(element.getAttribute('data-value'));
  }else{
    if (element.classList.contains('active')) {
      element.classList.remove('active')
    }
  }
}








