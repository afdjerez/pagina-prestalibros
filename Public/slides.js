let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.querySelector(".slides");
        let dots = document.getElementsByClassName("dot");
        let totalSlides = document.getElementsByClassName("slide").length;
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slideIndex++;
        if (slideIndex > totalSlides) {
            slideIndex = 1;
        }

        // Mueve las slides horizontalmente
        slides.style.transform = "translateX(" + (-100 * (slideIndex - 1)) + "%)";

        dots[slideIndex - 1].className += " active";

        setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
    }