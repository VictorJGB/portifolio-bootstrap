// header consts
const headerRef = document.getElementById('navBar');
const nav = document.getElementById('navbarNav');

// navbar consts
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .container .collapse ul li');

// form consts
const footerForm = document.querySelector('#footerForm');
const emailInput = document.querySelector('#emailControl');
const messageInput = document.querySelector('#messageControl');
var userMessages = [];

// Header change color on scroll from top
window.onscroll = function () {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    headerRef.classList.add('nav-bar-active');
    nav.classList.add('navbarNav-active');
  } else {
    headerRef.classList.remove('nav-bar-active');
    nav.classList.remove('navbarNav-active');
  }
};

// on scroll change active link

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
});

// form messages handler
function onSubmit() {
  if (!localStorage.getItem('userMessage') && userMessages.length > 0) {
    console.log('array esvaziado');
    userMessages = [];
  }

  const emailValue = emailInput.value;
  const messageValue = messageInput.value;

  var userMessageObject = {
    email: emailValue,
    message: messageValue,
  };
  userMessages.push(userMessageObject);

  localStorage.setItem('userMessage', JSON.stringify(userMessages));
  console.log(localStorage.getItem('userMessage'));
}
