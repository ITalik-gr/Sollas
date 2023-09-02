let accordionNav = document.querySelectorAll('.faq-accordion-nav'),
    accordionBody = document.querySelectorAll('.faq-accordion-body'),
    accordionImage = document.querySelectorAll('.faq-accordion-image svg path'),
    workCardImage = document.querySelectorAll('.work-card__image img')[0],
    workCard = document.querySelectorAll('.work-card');
    
    



//? Accordion

function openAccordion(i) {
  accordionImage[i].setAttribute('d', 'M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z')
  accordionBody[i].classList.add('faq-accordion-body--active');
}
function closeAccordion(i) {
  accordionBody[i].classList.remove('faq-accordion-body--active');
  accordionImage[i].setAttribute('d', 'M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z')
}
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

//? mobile menu

const menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu-close'),
      menuOpen = document.querySelector('.nav-hamburger'),
      menuListItems = document.querySelectorAll('.menu-list__item');

menuOpen.addEventListener('click', () => {
  menu.classList.add('menu--active');
})
menuListItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('menu--active');
  })
})


menuClose.addEventListener('click', () => {
  menu.classList.remove('menu--active');
})


//? Typing animation
var typed = new Typed('.typing', {
  strings: ['app', 'web app', 'SaaS'],
  loop: true,
  typeSpeed: 100,
  backSpeed: 150,
  backDelay: 1900,
  showCursor: false,
});

//? Scroll animation
AOS.init();

//? swiper 

const swiper = new Swiper('.facts-slider', {
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 14,
    },
    340: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    380: {
      slidesPerView: 1.34,
      spaceBetween: 16,
    },
    440: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    520: {
      slidesPerView: 1.8,
      spaceBetween: 16,
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 2,
    }
  }
});

// 


// Scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}




