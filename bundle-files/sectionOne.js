import { allFacts } from './allFacts';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const allList = [
  'earth',
  'mars',
  'mercury',
  'venus',
  'jupiter',
  'saturn',
  'uranus',
  'neptune',
];

function horizontalScroll() {
  const outer = document.getElementById('outer');
  const inner = document.getElementById('inner');

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

function displayFacts() {
  for (let i = 0; i < allFacts.length; i++) {
    const eachList = document.querySelector(`.${allList[i]}-facts`);

    for (let j = 0; j < allFacts[i].length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = allFacts[i][j];
      eachList.appendChild(listItem);
    }
  }
}

export { horizontalScroll, displayFacts };
