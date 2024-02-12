import selectPropertyAction , { heightType } from "./redux.js";
import { addToLocalStorage, createTest } from "./helpers.js";

/* ---------------- create age-wrapper content------------ */ 


const heightElements = createTest(120,220);


const heightSliders = heightElements.map(element => {
  return `<div class="swiper-slide" data-value=${element}>
    <button>${element}</button>
  </div>`
}).join('').split(',')

if (document.getElementById('swiper-height') != null) {
  document.getElementById('swiper-height').innerHTML = heightSliders;
}



/* -------------------- toggle active ------------------------ */


const swiperContainer = document.querySelector('.swiper');
const slides = document.querySelectorAll('.swiper-slide');


function chooseValue(){
  console.log('ggg');
  for (let index = 0; index < slides.length; index++) {

    let isOldActive = slides[index].classList.contains('swiper-slide-active'); 

     if (isOldActive) {

        slides.forEach(slide => slide.classList.contains('active') && slide.classList.remove('active') )
        
        let active = slides[index].nextElementSibling;

        active.classList.add('active');
     }
  }
}

  swiperContainer.addEventListener('touchstart', _=> chooseValue())
  swiperContainer.addEventListener('mousemove', _=> chooseValue())


  const heightBtn = document.querySelector('.height-btn');

  addToLocalStorage(heightType,slides,heightBtn);