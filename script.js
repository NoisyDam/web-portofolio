//toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//hamburger menu responsif
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classlist.toggle("active");
};
