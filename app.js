const phrases = [
  "Student",
  "Web Developer",
  "Freelancer"
];

const typedText = document.getElementById('typed-text');
const cursor = document.querySelector('.cursor');
let phraseIndex = 0;
let letterIndex = 0;
let typing = true;

function type() {
  if (phraseIndex >= phrases.length) phraseIndex = 0;
  const currentPhrase = phrases[phraseIndex];

  if (typing) {
    if (letterIndex < currentPhrase.length) {
      typedText.textContent += currentPhrase.charAt(letterIndex);
      letterIndex++;
      setTimeout(type, 80);
    } else {
      typing = false;
      setTimeout(type, 1200);
    }
  } else {
    if (letterIndex > 0) {
      typedText.textContent = currentPhrase.substring(0, letterIndex - 1);
      letterIndex--;
      setTimeout(type, 40);
    } else {
      typing = true;
      phraseIndex++;
      setTimeout(type, 400);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  type();

  // Optional: Highlight active nav link on scroll
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');
  function setActiveLink() {
    let index = sections.length;
    while(--index && window.scrollY + 80 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }
  setActiveLink();
  window.addEventListener('scroll', setActiveLink);

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});