let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');
let aboutButton = document.getElementById('about');
let closeAboutButton = document.getElementById('closeAbout');
let aboutPopup = document.getElementById('aboutPopup');
let checkoutButtons = document.querySelectorAll('.checkout button');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
// Caca
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        if (carousel.classList.contains('showDetail')) {
            carousel.classList.remove('showDetail');
        } else {
            carousel.classList.remove('next', 'prev');
            carousel.classList.add('showDetail');
        }
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}

aboutButton.onclick = function(){
    aboutPopup.classList.add('show');
}

closeAboutButton.onclick = function(){
    aboutPopup.classList.remove('show');
}

checkoutButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Checkout button clicked:', btn.textContent.trim());
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel .list .item');
    if (items.length > 1) {
        listHTML.prepend(items[items.length - 1]);
    }
});
