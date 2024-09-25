import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

const rockets = '🚀';

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

function appendRockets() {
  const header = document.querySelector('header');

  for (let i = 0; i < 15; i++) {
    const newRocket = document.createElement('div');
    newRocket.classList.add('rocket');
    newRocket.textContent = rockets;
    header.appendChild(newRocket);
  }
}

function rocketStart() {
  const rockets = document.querySelectorAll('.rocket');

  rockets.forEach((rocket) => {
    const leftPosition = Math.floor(Math.random() * 100);
    rocket.style.display = 'none';
    rocket.style.left = leftPosition + 'vw';
  });
}

function fly() {
  const rockets = document.querySelectorAll('.rocket');

  rockets.forEach((rocket) => {
    rocket.style.display = 'block';
    rocket.style.animation = 'flyRockets 2s forwards';
  });
}

function moveToNext() {
  const scrollDownButton = document.querySelector('header > button');
  const scrollDownArrow = document.querySelector('header > img');
  const scrollDownText = document.querySelector('header > p');
  const html = document.querySelector('html');

  scrollDownButton.addEventListener('click', () => {
    playStartAudio();
    fly();
    scrollDownButton.style.display = 'none';
    scrollDownArrow.style.display = 'block';
    scrollDownText.style.display = 'block';
    html.style.overflowY = 'scroll';
  });
}

function playStartAudio() {
  const launchAudio = new Audio('audio/launch-audio.mp3');
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

export { animateTitle, moveToNext, appendRockets, rocketStart };
