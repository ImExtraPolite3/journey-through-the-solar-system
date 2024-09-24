import './style.css';
import {
  addStars,
  animateTitle,
  moveStars,
  moveToNext,
  showText,
} from './startPage';
import { horizontalScroll, displayFacts } from './sectionOne';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

animateTitle();
addStars();
moveStars();
moveToNext();
horizontalScroll();
displayFacts();
showText();
