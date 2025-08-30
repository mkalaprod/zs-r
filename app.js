let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');
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
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}

checkoutButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        // Placeholder action: log click. Replace with real action.
        console.log('Checkout button clicked:', btn.textContent.trim());
        // Example: window.location.href = '#';
    });
});

// Ensure LOREM 1 shows first (CSS highlights nth-child(2)) without animation
window.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel .list .item');
    if (items.length > 1) {
        // Move last item to the front so the second item becomes the original first (LOREM 1)
        listHTML.prepend(items[items.length - 1]);
    }
});