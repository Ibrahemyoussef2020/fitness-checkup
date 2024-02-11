import { addToLocalStorage } from "./helpers.js";
import selectPropertyAction , { genderType } from "./redux.js";

const genders = document.querySelectorAll('.gender-item');

genders.forEach(gender => {
    gender.addEventListener('click' , e => {
        genders.forEach(gender => gender.classList.contains('active') && gender.classList.remove('active'))
        gender.classList.add('active');
    })
});

console.log(genders);


const genderBtn = document.querySelector('.gender-btn');

addToLocalStorage(genderType,genders,genderBtn);


