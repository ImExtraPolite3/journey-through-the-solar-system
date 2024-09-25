const endingText = [
  'THE END',
  'Project made by me :)',
  'Most difficult part of project was implementing the horizontal scroll.',
  'Overcame obstical by using using YouTube and going through the gsap documentation.',
  'I would like to make further improvements to how the page looks on mobile.',
];

export default function footer() {
  const getFooter = document.querySelector('footer');

  endingText.forEach((text) => {
    const textContainer = document.createElement('p');
    textContainer.textContent = text;
    getFooter.appendChild(textContainer);
  });
}
