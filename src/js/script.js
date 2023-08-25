let accordionNav = document.querySelectorAll('.faq-accordion-nav'),
    accordionBody = document.querySelectorAll('.faq-accordion-body'),
    accordionImage = document.querySelectorAll('.faq-accordion-image svg path');
    



//? Accordion

function openAccordion(i) {
  accordionImage[i].setAttribute('d', 'M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z')
  accordionBody[i].classList.add('faq-accordion-body--active');
}
function closeAccordion(i) {
  accordionBody[i].classList.remove('faq-accordion-body--active');
  accordionImage[i].setAttribute('d', 'M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z')
}
openAccordion(0);
accordionNav.forEach((item, i) => {
  item.addEventListener('click', () => {
    if(accordionBody[i].classList.contains('faq-accordion-body--active')) {
      closeAccordion(i)
    } else {
      openAccordion(i)
      for(let j = 0; j < accordionBody.length; j++) {
        if(j !== i) {
          accordionBody[j].classList.remove('faq-accordion-body--active')
        }
        
      }
    }
    
  })
})



// Typing animation
var typed = new Typed('.typing', {
  strings: ['web', 'app', 'SaaS'],
  loop: true,
  typeSpeed: 100,
  backSpeed: 150,
  backDelay: 1900,
  showCursor: false,
});

// Scroll animation
AOS.init();