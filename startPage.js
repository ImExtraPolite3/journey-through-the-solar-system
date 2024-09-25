import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

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
function playStartAudio() {
  const launchAudio = new Audio('/audio/launch-audio.mp3');
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

export { animateTitle, moveToNext };
