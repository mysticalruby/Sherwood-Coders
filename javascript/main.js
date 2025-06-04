 document.addEventListener('DOMContentLoaded', () => {
   const loader = document.querySelector('.loader');
   if (loader) {
     setTimeout(() => loader.classList.add('hide'), 500);
   }

   const beanFacts = [
     'Kidney beans were first domesticated in Peru.',
     'Coffee beans are actually seeds from berries.',
     'There are over 40,000 varieties of beans.',
     'Baked beans are a staple of British breakfasts.',
     'Vanilla beans come from orchids.'
   ];
   const beanBtn = document.getElementById('beanBtn');
   const beanOutput = document.getElementById('beanOutput');
   if (beanBtn && beanOutput) {
     beanBtn.addEventListener('click', () => {
       const fact = beanFacts[Math.floor(Math.random() * beanFacts.length)];
       beanOutput.textContent = fact;
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
