const hamberGer = document.querySelector(".hamberGer");
const navbar = document.querySelector(".navbar");
let isTrue = false;

const handleClick = () => {
  isTrue = !isTrue;
  handleNav(isTrue);
  hamberGer.src = isTrue ? "/img/icon-close.svg" : "/img/icon-hamburger.svg";
};

const handleNav = (isTrue) => {
  if (isTrue) {
    navbar.classList.remove("translate-x-[-100%]");
  } else {
    navbar.classList.add("translate-x-[-100%]");
  }
};
