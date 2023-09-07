import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';


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


let sendBtn = document.querySelector('.idea-btn'),
    inputName = document.querySelector('.idea-name'),
    inputEmail = document.querySelector('.idea-email'),
    inputDescr = document.querySelector('.idea-descr'),
    inputTags = document.querySelectorAll('.idea-tag'),
    errorSpan = document.querySelector('.idea-input__error');

function validateEmail(email) {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
}


function checkEmail(e) {
  if(e.target == inputEmail) {
    if(validateEmail(inputEmail.value)) {
      inputEmail.classList.remove('idea-input--error')
      errorSpan.classList.remove('idea-input__error--active');
    } else {
      inputEmail.classList.add('idea-input--error')
      errorSpan.classList.add('idea-input__error--active');
    }
  }

  if(validateEmail(inputEmail.value) && inputName.value.length >= 2) {
    sendBtn.disabled = false
  } else {
    sendBtn.disabled = true
  }
}


inputEmail.addEventListener('input', checkEmail)
inputName.addEventListener('input', checkEmail )

let tags = [];

inputTags.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('idea-tag--active')
  })
})
async function sendMail(e) {
  e.preventDefault()
  console.log('sending...')

  inputTags.forEach(item => {
    if(item.classList.contains('idea-tag--active')) {
      tags.push(item.getAttribute('data-tag'))
    }
  })

  try {
    const response = await axios.post("https://sollas-server.onrender.com/send-email", {
      name: inputName.value,
      email: inputEmail.value,
      descr: inputDescr.value.length > 0 ? inputDescr.value : 'none',
      tags:  tags.length > 0 ? tags : 'none' 
    });

    console.log(response)

    // Перенести користувача на інший URL
    window.location.href = "https://sollas.co/thanks.html";

  } catch (error) {
    console.log(error)
  }
  console.log('close funcion')
}

sendBtn.addEventListener('click', sendMail);

