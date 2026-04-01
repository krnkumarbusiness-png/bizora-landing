// 1. Mobile Menu Toggle Logic
const menuToggle = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobile-nav');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});

// Close mobile nav when clicking on a link
document.querySelectorAll('.nav-links-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// 2. Custom Modal Logic (For Start Quiz Buttons)
const modal = document.getElementById('custom-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const allQuizButtons = document.querySelectorAll('.start-quiz-btn, .nav-cta, .btn-large');

allQuizButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
    });
});

// Close modal when clicking button or outside the box
modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// 3. Reveal Animations on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
});

// 4. Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
