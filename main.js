import './style.css';
import {
  animateTitle,
  moveToNext,
  appendRockets,
  rocketStart,
} from './startPage';
import { horizontalScroll, displayFacts } from './sectionOne';
import footer from './footer';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

animateTitle();
appendRockets();
rocketStart();
moveToNext();
horizontalScroll();
displayFacts();
footer();
