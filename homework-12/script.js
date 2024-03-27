const images = document.querySelectorAll('img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let sliderIndex = 0;

next.addEventListener('click', nextSlider)
prev.addEventListener('click', prevSlider)

function nextSlider() {
    sliderIndex++;
    if (sliderIndex >= images.length - 1) {
        sliderIndex = images.length - 1;
        next.style.display = 'none'; 
    }
    prev.style.display = 'block'; 
    showSlider();
}

function prevSlider() {
    sliderIndex--;
    if (sliderIndex <= 0) {
        sliderIndex = 0;
        prev.style.display = 'none'; 
    }
    next.style.display = 'block'; 
    showSlider();
}


function showSlider(){
    images.forEach((img, index) => {
        if (index === sliderIndex) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}



