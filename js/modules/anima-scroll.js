export default function initAnimacaoScroll() {
  const sectionScroll = document.querySelectorAll(".js-scroll");
  if (sectionScroll.length) {
    const windowMetade = innerHeight * 0.6;
    function animaScroll() {
      sectionScroll.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionInvisible = sectionTop - windowMetade < 0;
        if (sectionInvisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
