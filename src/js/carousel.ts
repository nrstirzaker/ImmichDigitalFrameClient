const slideInterval: number  = Number(import.meta.env.SLIDE_INTERVAL) || 86400; //default 1 minute

window.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    if (slides.length < 2) {
        return;
    }

    setInterval(function () {
        slides[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add("active");
        console.log("slideInterval:",slideInterval);
    }, slideInterval);
});