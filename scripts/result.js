/// local storage

const data = JSON.parse(localStorage.getItem('test')) || {};


/// local storage


const myB = document.querySelector('.result-btn');
const resultHeading = document.querySelector('.result__heading');
const result = document.querySelector('.result');



/// variabel to optimum values

let kidT = 150;
let kidW = 40;
let kidMW = 55;
/********20*********/
let teenagerT = 160;
let teenagerW = 50;
let teenagerMW = 60;
/********20*********/
let boyT = 170;
let boyW = 55;
let boyMW = 65;
/*********30*****************/
let youngT = 175;
let youngW = 60;
let youngMW= 75;
/**********40****************/
let manT = 170;
let manW = 65;
let manMW = 80;
/***********50*******************/
let oldT = 165;
let oldW = 50;
let oldMW = 60;
/******************************/

/// test the is the weight is appropriate for the height or not;

function testWeight(age,height){

}

/* more to فaking into account 
the differences between contestants 
according to gender and ethnicity */


let dynastyMore;
let genderMore;

switch (data?.dynasty) {
    case 'arabian':
        dynastyMore = 5;   
        break;
    case 'white':
        dynastyMore = 15;   
        break;    
    case 'african':
        dynastyMore = 25;   
        break; 
    default:
        dynastyMore = 0;   
        break;
}

switch (data?.gender) {
    case 'female':
        genderMore = 0;   
        break; 
    default:
        genderMore = 12;   
        break;
}

const more = dynastyMore + genderMore;


/// result function


function startTest(){

    if(data.age <= 13 && data.height >= kidT + more && data.weight >= kidW + more && data.weight < kidMW 
    //BOY
    || data.age < 20 && data.height >= teenagerT && data.weight >= teenagerW && data.weight < teenagerMW 

    || data.age <= 20 && data.height >= boyT && data.weight >= boyW && data.weight < boyMW 

    //YOUNG
    || data.age <= 30 && data.height >= youngT && data.weight >= youngW && data.weight < youngMW 
    //MAN

    || data.age <= 40 && data.height >= manT && data.weight >= manW && data.weight < manMW 
    //OLD
    || data.age >= 50 && data.height >= oldT && data.weight >= oldW  && data.weight < oldMW )

    {

        if (result.classList.contains('failed')) {

            result.classList.remove('failed')
        }

        result.classList.add('passed')

        resultHeading.innerHTML = 'You Are Fitness';
    }
    else{

        if (result.classList.contains('passed')) {

            result.classList.remove('passed')
        }

        result.classList.add('failed')

        resultHeading.innerHTML = 'You Wont To be Fitness';
    } 
    
    setTimeout(e => showRulesDetails(),0)
}

window.addEventListener('DOMContentLoaded' , _=> startTest());



/// details

function showRulesDetails(){

    document.getElementById("art-kid").innerHTML = `

    <li  class='heading'>if your age from 7 to 10 </li>
    <li> <img src='./images/${result.classList.contains('passed') ? 'success' : 'error'}-arrow.png' /> should your tall equall ${kidT + more} or more </li>
    <li> <img src='./images/${result.classList.contains('passed') ? 'success' : 'error'}-arrow.png' /> should your weight from ${kidW + more} to ${kidMW + more} </li>
    <li> <img src='./images/${result.classList.contains('passed') ? 'success' : 'error'}-arrow.png' /> more tall is not bad as more fit </li>
    `;

    document.getElementById("art-boy").innerHTML = `

    <li  class='heading'>if your age from 10 to 18 </li> 
    <li> <img src='./images/${result.classList.contains('passed') ? 'success' : 'error'}-arrow.png' /> should your tall equall ${boyT + more} or more </li>
    <li> <img src='./images/${result.classList.contains('passed') ? 'success' : 'error'}-arrow.png' /> should your weight from ${boyW + more} to ${boyMW + more} </li>
    <li> <img src='./images/${result.classList.contains('passed') ? 'success' : 'error'}-arrow.png' /> more tall is not bad as more fit </li>
    `;  

    document.getElementById("art-young").innerHTML = `

    <li  class='heading'>if your age from 20 to 27 maybe 37 </li>
    <li> <img src='./images/${result.classList.contains('passed') ? 'success' : 'error'}-arrow.png' /> should your tall equall ${youngT + more} or more </li>
    <li> <img src='./images/${result.classList.contains('passed') ? 'success' : 'error'}-arrow.png' /> should your weight from ${youngW + more} to ${manMW + more} </li>
    <li> <img src='./images/${result.classList.contains('passed') ? 'success' : 'error'}-arrow.png' /> more tall is not bad as more fit </li>
    `;

    document.getElementById("art-old").innerHTML = `

    <li  class='heading'>if your age from 40 to 70 maybe 60 </li>
    <li> <img src='./images/${result.classList.contains('passed') ? 'success' : 'error'}-arrow.png' /> should your tall equall ${oldT + more} or more </li>
    <li> <img src='./images/${result.classList.contains('passed') ? 'success' : 'error'}-arrow.png' /> should your weight from ${oldW + more} to ${oldMW + more} </li>
    <li> <img src='./images/${result.classList.contains('passed') ? 'success' : 'error'}-arrow.png' /> more tall is not bad as more fit </li>
    `;
}