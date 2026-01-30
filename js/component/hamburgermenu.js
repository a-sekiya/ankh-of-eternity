/**
 * ハンバーガーメニュー
 */
export const initializeHamburgerMenu = () => {
  const menu = document.querySelector(".js-header-menu");
  const menuTop = document.querySelector(".js-header-menu-top");
  const menuItems = document.querySelectorAll(".js-l-header-menu-item");
  const openButton = document.querySelector(".js-header-menu-open-button");
  const closeButton = document.querySelector(".js-header-menu-close-button");

  if (!menu || !openButton || !closeButton) return;

  // --- メニューを開く処理 ---
  const openMenu = () => {
    gsap.killTweensOf([menu, menuTop, menuItems]);
    document.body.style.overflow = "hidden";
    openButton.classList.add("is-open");

    menu.showModal();

    const tl = gsap.timeline();

    // 1. 背景：0.8秒 → 0.4秒に短縮し、すぐ中身へ
    tl.fromTo(menu, { autoAlpha: 0, scale: 1.01 }, { autoAlpha: 0.9, scale: 1, duration: 0.4, ease: "power2.out" });

    // 2. 上部ロゴ・ボタン
    tl.fromTo(menuTop, { y: -10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: "expo.out" }, "-=0.3");

    // 3. メニュー項目
    menuItems.forEach((item, index) => {
      const enText = item.querySelector(".js-l-header-menu-text-en");
      if (enText === 0) return;

      tl.fromTo(item, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" }, index === 0 ? "-=0.6" : "-=0.7");

      if (enText) {
        tl.fromTo(enText, { letterSpacing: "0.3em", filter: "blur(2px)" }, { letterSpacing: "0.05em", filter: "blur(0px)", duration: 1.0, ease: "power2.out" }, "<");
      }
    });
  };

  // --- メニューを閉じる処理 ---
  const closeMenu = () => {
    gsap.to(menu, {
      autoAlpha: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        menu.close();
        document.body.style.overflow = "";
        openButton.classList.remove("is-open");
        // スタイルをクリアして次回の挙動を安定させる
        gsap.set([menu, menuTop, menuItems], { clearProps: "all" });
      },
    });
  };

  // イベントリスナー
  openButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) {
      event.preventDefault();
      closeMenu();
    }
  });
};
