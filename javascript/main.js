document.addEventListener('DOMContentLoaded', () => {
   const loader = document.querySelector('.loader');
   if (loader) {
     setTimeout(() => loader.classList.add('hide'), 500);
   }

  const codingFacts = [
    'The first computer bug was an actual moth found in a Harvard Mark II computer.',
    'The first programmer was Ada Lovelace in the 19th century.',
    'JavaScript was created in just 10 days.',
    'The first computer game is generally recognized as Spacewar!, developed in 1962.',
    'Python is named after the comedy group Monty Python.'
  ];
  const codeBtn = document.getElementById('codeBtn');
  const codeOutput = document.getElementById('codeOutput');
  if (codeBtn && codeOutput) {
    codeBtn.addEventListener('click', () => {
      const fact = codingFacts[Math.floor(Math.random() * codingFacts.length)];
      codeOutput.textContent = fact;
    });
  }

   const playground = document.getElementById('playground');
   const colorInput = document.getElementById('playground-color');
   const fontSelect = document.getElementById('playground-font');
   function updatePlayground() {
     if (playground) {
       playground.style.color = colorInput.value;
       playground.style.fontFamily = fontSelect.value;
     }
   }
  if (colorInput && fontSelect) {
    colorInput.addEventListener('input', updatePlayground);
    fontSelect.addEventListener('change', updatePlayground);
    updatePlayground();
  }

  const slides = document.querySelectorAll('.programmer-slide');
  const randomLinks = [
    'https://example.com',
    'https://www.wikipedia.org',
    'https://www.mozilla.org',
    'https://github.com',
    'https://openai.com'
  ];
  const linkElements = document.querySelectorAll('.random-link');
  linkElements.forEach(el => {
    const url = randomLinks[Math.floor(Math.random() * randomLinks.length)];
    el.href = url;
    el.textContent = url;
  });

  let slideIndex = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  if (slides.length) {
    showSlide(slideIndex);
    setInterval(() => {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }, 10000);
  }
});