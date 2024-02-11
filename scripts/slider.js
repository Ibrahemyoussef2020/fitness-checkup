const paginaion = document.querySelector('.paginaion-bar');
const paginaions = document.querySelectorAll('.pag');
const slider = document.querySelector('.slider__thumb');

console.log(paginaions.length);
console.log(paginaions);

paginaion.addEventListener('click' , e =>{

        paginaions.forEach(paginaion => paginaion.classList.contains('active') ? paginaion.classList.remove('active') : null)

        e.target.classList.add('active');


        if (e.target.classList.contains('pag__one')) {
            slider.style.transform = 'translateX(0)';
        }
        else if (e.target.classList.contains('pag__two')) {
            slider.style.transform = 'translateX(-100%)';
        }
        else if (e.target.classList.contains('pag__three')) {
            slider.style.transform = 'translateX(-200%)'
        }
})