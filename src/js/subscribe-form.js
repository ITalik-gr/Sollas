const subscribeInput = document.querySelector('.newsletter-input'),
      subscribeBtn = document.querySelector('.newsletter-btn'),
      subscribeError = document.querySelector('.newsletter-input-error');


function inputError() {
  subscribeInput.classList.remove('newsletter-succsess')
  subscribeInput.classList.add('newsletter-error')
  subscribeError.classList.add('newsletter-input-error--active')
}
function inputSuccsess() {
  subscribeInput.classList.remove('newsletter-error')
  subscribeError.classList.remove('newsletter-input-error--active')
}
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Функція для підписки користувача за поштою
async function subscribeByEmail(userEmail) {
  let response = await axios.post('https://lazy-yoke-wasp.cyclic.cloud/subscribe', {
    "email": userEmail
  })
  if(response.data) {
    inputSuccsess()
    subscribeInput.classList.add('newsletter-succsess')
  } else {
    inputError()
  }
}

subscribeBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if(isValidEmail(subscribeInput.value)) {
    inputSuccsess()
  } else {
    inputError()
    return
  }
  subscribeByEmail(subscribeInput.value)
})
