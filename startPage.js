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
  const moveDown = document.querySelector('header > button');
  const app = document.getElementById('app');

  moveDown.addEventListener('click', () => {
    app.style.animation = 'slideDown 2s forwards';
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

function horizonatalScroll() {
  gsap.to('#inner', {
    xPercent: -400, // Moves the container to the left (since we have 5 sections, move by 400%)
    ease: 'none',
    scrollTrigger: {
      trigger: '#outer',
      pin: true, // Pins the container so it stays fixed while scrolling
      scrub: true, // Smooth scrubbing
      end: '+=4000', // Adjust the end based on the content's width (adjust as necessary)
    },
  });
}

export { animateTitle, addStars, moveStars, moveToNext, horizonatalScroll };
