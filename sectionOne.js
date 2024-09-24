import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const allFacts = [
  [
    'Earth is approximately 4.54 billion years old.',
    'Earth is not a perfect sphere. It’s slightly flattened at the poles and bulging at the equator due to its rotation, making it an oblate spheroid.',
    'Earth’s atmosphere is made up of 78% nitrogen, 21% oxygen, and traces of other gases, such as argon and carbon dioxide.',
    'About 71% of Earth’s surface is covered by water, with the remaining 29% being land.',
    'Earth has a magnetic field generated by movements in its molten outer core. This field protects us from harmful solar and cosmic radiation.',
    'Earth rotates on its axis once every 24 hours, which gives us day and night.',
    'Earth orbits the Sun at an average distance of about 93 million miles (150 million kilometers), completing one orbit every 365.25 days.',
    'Earth is the only known planet that supports life, thanks to its perfect conditions for water, atmosphere, and temperature.',
    "Earth's tilted axis of 23.5 degrees causes the seasons as it orbits the Sun.",
    'Earth has one natural satellite, the Moon, which helps stabilize the planet’s axial tilt and affects tides.',
  ],
  [
    'Mars is often called the "Red Planet" due to its reddish appearance, caused by iron oxide (rust) on its surface.',
    'Mars is about half the size of Earth, with a diameter of approximately 6,779 kilometers (4,212 miles).',
    "Mars has only about 38% of Earth's gravity, meaning you would weigh significantly less on Mars.",
    'The atmosphere of Mars is very thin, composed mostly of carbon dioxide (95%), with traces of nitrogen and argon. It’s not breathable for humans.',
    'Mars is much colder than Earth, with an average surface temperature of about -80°F (-60°C). Temperatures can drop as low as -195°F (-125°C) near the poles during winter.',
    'Mars has two small moons, Phobos and Deimos. They are irregularly shaped and are thought to be captured asteroids.',
    'A day on Mars (called a "sol") is about 24.6 hours, just a little longer than a day on Earth. A year on Mars lasts 687 Earth days, almost twice as long as a year on Earth.',
    'While there’s no liquid water on the surface today, Mars has polar ice caps made of water and carbon dioxide. Evidence suggests that Mars had rivers, lakes, and even oceans in its ancient past.',
    'Mars is home to the largest volcano in the solar system, Olympus Mons, which stands about 13.6 miles (22 km) high, nearly three times the height of Mount Everest.',
    'Several rovers, such as Curiosity and Perseverance, have been sent to Mars to study its surface, geology, and potential signs of past life.',
  ],
];

const allList = ['earth', 'mars'];

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
