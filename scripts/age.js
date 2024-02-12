import selectPropertyAction , { ageType } from "./redux.js";
import { addToLocalStorage, createTest } from "./helpers.js";

/* ---------------- create age-wrapper content------------ */ 

const ageElements = createTest(6,90);


const ageSliders = ageElements.map(element => {
  return `<div class="swiper-slide" data-value=${element}>
    <button>${element}</button>
  </div>`
}).join('').split(',')


if (document.getElementById('swiper-age') != null) {
 document.getElementById('swiper-age').innerHTML = ageSliders;
}


/* -------------------- toggle active ------------------------ */


const swiperContainer = document.querySelector('.swiper');
const slides = document.querySelectorAll('.swiper-slide');

  function chooseValue(){
    for (let index = 0; index < slides.length; index++) {

      let isNext = slides[index].classList.contains('swiper-slide-next'); 
      

       if (isNext) {

          slides.forEach(slide => slide.classList.contains('active') && slide.classList.remove('active') )
          
          let next = slides[index].nextElementSibling;

          let active = next.nextElementSibling; 

          active.classList.add('active');

       }
    }
  }

  swiperContainer.addEventListener('touchstart', _=> chooseValue())
  swiperContainer.addEventListener('mousemove', _=> chooseValue())


  const ageBtn = document.querySelector('.age-btn');

  addToLocalStorage(ageType,slides,ageBtn)




