import './style.css';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

gsap.to('h1', { duration: 3, text: 'Journey Through the Solar System' });
