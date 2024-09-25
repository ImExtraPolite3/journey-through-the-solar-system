import './style.css';
import {
  animateTitle,
  moveToNext,
  appendRockets,
  rocketStart,
} from './bundle-files/startPage';
import { horizontalScroll, displayFacts } from './bundle-files/sectionOne';
import footer from './bundle-files/footer';

function all() {
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
}

all();
