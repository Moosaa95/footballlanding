let slideIndex  = 0
showSlides(slideIndex)

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')


prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showSlides(slideIndex--)
    
})

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showSlides(slideIndex++)

    
})

// slideIndex = 1
// if slideIndex > 4 skip
// if slideIndex < 0 skip 



function showSlides(n){
    let i;
    let slides = document.querySelectorAll('.slides')
    console.log(n, slides.length, 'length', slides);
    if (n >= slides.length-1){
        console.log('hey');
        slideIndex = 0
    }
    if (n < 0) {
        console.log('less than zero')
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

    console.log('slider', slideIndex)

    slides[slideIndex].style.display = "block"
}

console.log(slideIndex, 'slide index')

// slides[1].style.display = "block"