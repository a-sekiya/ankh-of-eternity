export const initializeHamburgerMenu = () => {
  const menu = document.querySelector(".js-header-menu");
  const openButton = document.querySelector(".js-header-menu-open-button");
  const closeButton = document.querySelector(".js-header-menu-close-button");

  if (!menu || !openButton || !closeButton) return;

  const contentsOpeningKeyframes = { opacity: [0, 1] };
  const contentsOpeningOptions = { duration: 200, easing: "ease-out" };
  const contentsClosingKeyframes = { opacity: [1, 0] };
  const contentsClosingOptions = { duration: 200, easing: "ease-out" };

  const openMenu = () => {
    menu.showModal();
    menu.animate(contentsOpeningKeyframes, contentsOpeningOptions);
    document.body.style.overflow = "hidden";
    openButton.classList.add("is-open");
  };

  const closeMenu = () => {
    const closingAnim = menu.animate(contentsClosingKeyframes, contentsClosingOptions);

    closingAnim.onfinish = () => {
      menu.close();
      document.body.style.overflow = "";
      openButton.classList.remove("is-open");
    };
  };

  openButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) {
      event.preventDefault();
      closeMenu();
    }
  });
};
