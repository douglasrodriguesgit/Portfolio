export default function initScrollSuave() {
  const navMenu = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollMenu(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const menu = document.querySelector(href);
    menu.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  navMenu.forEach((link) => {
    link.addEventListener("click", scrollMenu);
  });
}
