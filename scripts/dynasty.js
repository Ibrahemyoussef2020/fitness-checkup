import { addToLocalStorage } from "./helpers.js";
import selectPropertyAction , { dynastyType } from "./redux.js";

const dynasties = document.querySelectorAll('.dynasty-item');

dynasties.forEach(dynasty => {
    dynasty.addEventListener('click' , e => {
        dynasties.forEach(dynasty => dynasty.classList.contains('active') && dynasty.classList.remove('active'))
        dynasty.classList.add('active');
    })
});

console.log(dynasties);


const dynastyBtn = document.querySelector('.dynasty-btn');

addToLocalStorage(dynastyType,dynasties,dynastyBtn);


