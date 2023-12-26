let menuOpenButton = document.querySelector(`.menu-open-button`);
let menuCloseIcon = document.querySelector(`.mobile-butoon-close`);
let mobileMenu = document.querySelector(`.mobile-menu`);

let mobileNav = document.querySelector(`.mob-portfolio`);

menuOpenButton.addEventListener(`click`, () => {
  mobileMenu.classList.add(`is-open`);
});
menuCloseIcon.addEventListener(`click`, () => {
  mobileMenu.classList.remove(`is-open`);
});
mobileNav.addEventListener(`click`, () => {
  mobileMenu.classList.remove(`is-open`);
});

////efdwefwfewfewfwfw
function slowScroll(target) {
  let currentPosition = window.scrollY;
  let targetPosition = document.querySelector(target).offsetTop;
  let distance = targetPosition - currentPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, currentPosition, distance, 1000);
    window.scrollTo(0, run);
    if (timeElapsed < 1000) {
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return (c / 2) * t * t + b;
    }
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Навішуємо подію click на всі якірні посилання
let links = document.querySelectorAll("a[href^='#']");
for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let target = this.getAttribute('href');
    slowScroll(target);
  });
}
