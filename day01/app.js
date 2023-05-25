// const slides = document.querySelectorAll('.slide')

// for (const slide of slides) {
//     slide.addEventListener('click', () => {
//         clearActiveClasses()

//         slide.classList.add('active')
//     })
// }

// function clearActiveClasses() {
//     slides.forEach((slide) => {
//         slide.classList.remove('active')
//     })
// }

const slides = document.querySelectorAll('.slide')

function toggleSlide(slide) {
    slide.classList.toggle('active');
}

for (const slide of slides) {
    slide.addEventListener('click', () => {
        toggleSlide(slide);
    });
}