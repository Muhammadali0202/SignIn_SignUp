const loginText = document.querySelector('.title-text .login');
const loginForm = document.querySelector('form.login');
const signupForm = document.querySelector('form.signup');
const loginBtn = document.querySelector('label.login');
const signupBtn = document.querySelector('label.signup');
const signupLink = document.querySelector('form.signup-link a');

loginBtn.addEventListener('click', function () {
  loginForm.style.marginLeft = '0%';
  loginText.style.marginLeft = '0%';
});

signupBtn.addEventListener('click', function () {
  loginForm.style.marginLeft = '-50%';
  loginText.style.marginLeft = '-50%';
});

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Login form submitted');
});
signupForm.addEventListener('submit', function (event) {
  event.preventDefault();
  alert('signup form submitted');
});