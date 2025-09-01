// Mobile Nav

const menuIcon = document.getElementById("menuIcon");
const mobileNav = document.getElementById("mobileNav");

menuIcon.addEventListener("click", () => {
  const isVisible = mobileNav.classList.contains("mobile-nav-unhide");

  if (isVisible) {
    mobileNav.classList.remove("mobile-nav-unhide");
  } else {
    mobileNav.classList.add("mobile-nav-unhide");
  }
});
