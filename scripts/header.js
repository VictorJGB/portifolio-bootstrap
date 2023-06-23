const headerRef = document.getElementById("navBar");

// Header change color on scroll from top
window.onscroll = function () {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    headerRef.classList.add("nav-bar-active");
  } else {
    headerRef.classList.remove("nav-bar-active");
  }
};
