import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(TextPlugin, ScrollTrigger);

const star = '✨';

const titles = [
  'the Solar System',
  'Earth',
  'Mars',
  'Mercury',
  'Venus',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
];

function addStars() {
  const header = document.querySelector('header');

  for (let i = 0; i < 50; i++) {
    const createStar = document.createElement('div');
    createStar.innerHTML = star;
    createStar.classList.add('star');
    header.appendChild(createStar);
  }
}

function moveToNext() {
  const scrollDownButton = document.querySelector('header > button');
  const scrollDownArrow = document.querySelector('header > img');
  const html = document.querySelector('html');

  scrollDownButton.addEventListener('click', () => {
    scrollDownButton.style.display = 'none';
    scrollDownArrow.style.display = 'block';
    html.style.overflowY = 'scroll';
  });
}

function moveStars() {
  const stars = document.querySelectorAll('.star');

  stars.forEach((star) => {
    let topPosition = Math.floor(Math.random() * 100);
    let leftPosition = Math.floor(Math.random() * 100);
    let rightPosition = Math.floor(Math.random() * 100);
    let bottomPosition = Math.floor(Math.random() * 100);

    star.style.animation = 'sparkle 20000ms infinite both';
    star.style.top = `${topPosition}vh`;
    star.style.left = `${leftPosition}vw`;
    star.style.right = `${rightPosition}vw`;
    star.style.bottom = `${bottomPosition}vh`;
  });
}

function animateTitle() {
  let tl = gsap.timeline({ repeat: -1 });

  titles.forEach((title) => {
    tl.to('h1', { duration: 3, text: '' }).to('h1', {
      duration: 3,
      text: `Journey through ${title}`,
    });
  });
}

function horizontalScroll() {
  const outer = document.getElementById('outer');
  const inner = document.getElementById('inner');
  const innerSections = gsap.utils.toArray('#inner > section');

  gsap.to(inner, {
    x: () => -(inner.offsetWidth - outer.offsetWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: '#section-one',
      start: 'top top',
      end: () => `+=${inner.offsetWidth - outer.offsetWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}

export { animateTitle, addStars, moveStars, moveToNext, horizontalScroll };
