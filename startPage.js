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
  const footer = document.querySelector('footer');

  for (let i = 0; i < 100; i++) {
    const createStar = document.createElement('div');
    createStar.innerHTML = star;
    createStar.classList.add('star');
    header.appendChild(createStar);
    footer.appendChild(createStar);
  }
}

function moveToNext() {
  const scrollDownButton = document.querySelector('header > button');
  const scrollDownArrow = document.querySelector('header > img');
  const scrollDownText = document.querySelector('header > p');
  const html = document.querySelector('html');

  scrollDownButton.addEventListener('click', () => {
    playStartAudio();
    scrollDownButton.style.display = 'none';
    scrollDownArrow.style.display = 'block';
    scrollDownText.style.display = 'block';
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

function playStartAudio() {
  const launchAudio = new Audio('./audio/launch-audio.mp3');
  launchAudio.play();
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

export { animateTitle, addStars, moveStars, moveToNext };
