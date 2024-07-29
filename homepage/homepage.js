// Main Image Slideshow
let mainSlideIndex = 0;
showMainSlides();

function showMainSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    mainSlideIndex++;
    if (mainSlideIndex > slides.length) {mainSlideIndex = 1}    
    slides[mainSlideIndex - 1].style.display = "block";  
    setTimeout(showMainSlides, 3000); // Change image every 3 seconds
}

// Customer Testimonials Slideshow
let testimonialSlideIndex = 1;
showTestimonialSlides(testimonialSlideIndex);

function changeSlide(n) {
    showTestimonialSlides(testimonialSlideIndex += n);
}

function currentSlide(n) {
    showTestimonialSlides(testimonialSlideIndex = n);
}

function showTestimonialSlides(n) {
    let i;
    let slides = document.getElementsByClassName("testimonial-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {testimonialSlideIndex = 1}    
    if (n < 1) {testimonialSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[testimonialSlideIndex - 1].style.display = "block";  
    dots[testimonialSlideIndex - 1].className += " active";
}
