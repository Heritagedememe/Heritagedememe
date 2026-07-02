 const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

const burgerBtn = document.getElementById('burgerBtn');
const navLinks  = document.querySelector('.navbar__links');

burgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const revealEls = document.querySelectorAll(
  '.about__grid, .menu-card, .value-item, .contact-banner__actions'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});




const stars = document.querySelectorAll('.star');
const starCaption = document.getElementById('starCaption');
const submitReview = document.getElementById('submitReview');
const thankMsg = document.getElementById('thankMsg');
const captions = ['', 'Décevant…', 'Peut mieux faire', 'Bien !', 'Très bien !', 'Excellent ! ✦'];

let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const val = +star.dataset.value;
    stars.forEach(s => s.classList.toggle('hovered', +s.dataset.value <= val));
    starCaption.textContent = captions[val];
  });

  star.addEventListener('mouseout', () => {
    stars.forEach(s => s.classList.remove('hovered'));
    starCaption.textContent = selectedRating ? captions[selectedRating] : 'Cliquez pour noter';
  });

  star.addEventListener('click', () => {
    selectedRating = +star.dataset.value;
    stars.forEach(s => s.classList.toggle('selected', +s.dataset.value <= selectedRating));
  });
});

submitReview.addEventListener('click', () => {
  if (!selectedRating) {
    thankMsg.textContent = 'Veuillez choisir une note ✦';
    thankMsg.style.color = '#c0392b';
    return;
  }
  thankMsg.textContent = 'Merci pour votre avis, cela nous touche ! ✦';
  thankMsg.style.color = '';
  document.getElementById('reviewText').value = '';
  selectedRating = 0;
  stars.forEach(s => s.classList.remove('selected'));
  starCaption.textContent = 'Cliquez pour noter';
});
