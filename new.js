document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
const { annotate } = RoughNotation;
// Or using unpkg
// import { annotate } from 'https://unpkg.com/rough-notation?module';

const e = document.getElementById("htext");
const annotation = annotate(e, { type: 'underline' });
annotation.show();