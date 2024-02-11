import selectPropertyAction , { weightType } from "./redux.js";
import { addToLocalStorage, createTest } from "./helpers.js";
import { checkisVisible } from "./horizontal-slide.js";


/* ---------------- create age-wrapper content------------ */ 

const weightElements = createTest(40,120);//110


const weightSliders = weightElements.map(element => {
  return `<div class="swiper-slide" data-value=${element}>
    <button>${element}</button>
  </div>`
}).join('').split(',')


if (document.getElementById('swiper-weight') != null) {

  document.getElementById('swiper-weight').innerHTML = weightSliders;
}


/* -------------------- toggle active ------------------------ */


const swiperContainer = document.querySelector('.swiper');
const slides = document.querySelectorAll('.swiper-slide');
const weightBtn = document.querySelector('.weight-btn');

weightBtn.addEventListener('click' , e =>{
  slides.forEach(slide => {
    if ( slide.classList.contains('swiper-slide-active')) {
        
        slide.classList.add('active')
        
    }else{

      if ( slide.classList.contains('swiper-slide-active')) {
        slide.classList.remove('active')
      }
    }
    
  })

});

addToLocalStorage(weightType,slides,weightBtn);


