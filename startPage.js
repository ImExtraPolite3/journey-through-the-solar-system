import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

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

  for (let i = 0; i < 100; i++) {
    const createStar = document.createElement('div');
    createStar.innerHTML = star;
    createStar.classList.add('star');
    header.appendChild(createStar);
  }
}

function moveStars() {
  const stars = document.querySelectorAll('.star');

  stars.forEach((star) => {
    let topPosition = Math.floor(Math.random() * 100);
    let leftPosition = Math.floor(Math.random() * 100);
    let rightPosition = Math.floor(Math.random() * 100);
    let bottomPosition = Math.floor(Math.random() * 100);

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

export { animateTitle, addStars, moveStars };
