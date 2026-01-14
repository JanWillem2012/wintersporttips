// script.js

// Functie om elementen te tonen als ze in beeld komen (Scroll Animation)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Animatie maar 1 keer uitvoeren
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});

console.log("WinterPro site geladen!");
