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


//? Scroll animation
// AOS.init();

//? swiper 

const swiper = new Swiper('.extra-slider', {
  spaceBetween: 10,
  // slidesPerView: 1.5,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
    },
    400: {
      slidesPerView: 1.3,
    },
    500: {
      slidesPerView: 1.7,
    },
    576: {
      slidesPerView: 1.9,
    },
  }
});

const swiperWorks = new Swiper('.works-slider', {
  spaceBetween: 10,
  // slidesPerView: 1.5,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
    },
    400: {
      slidesPerView: 1.3,
    },
    500: {
      slidesPerView: 1.7,
    },
    576: {
      slidesPerView: 1.9,
    },
  }
});




// Scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  if(anchor.getAttribute('href')[0] !== '#') {
    continue;
  }
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}




