const wrapper = document.querySelector('.wrapper');
const Register = document.querySelector('.Register-link');
const Login = document.querySelector('.login-link');
const popUp = document.querySelector('.loginButton');
let iconClose = document.querySelector('.icon-close');

Register.addEventListener('click', () => {
  wrapper.classList.add('active');
});

Login.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

popUp.addEventListener('click', () => {
  wrapper.classList.add('active-popup')
});
iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup')
});