import './style.css';
import { animateTitle, moveToNext } from './startPage';
import { horizontalScroll, displayFacts } from './sectionOne';
import footer from './footer';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

animateTitle();
moveToNext();
horizontalScroll();
displayFacts();
footer();
