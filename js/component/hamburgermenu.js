/**
 * ハンバーガーメニュー
 */
export const initializeHamburgerMenu = () => {
  const menu = document.querySelector(".js-header-menu");
  const menuTop = document.querySelector(".js-header-menu-top");
  const menuItems = document.querySelectorAll(".js-l-header-menu-item");
  const openButton = document.querySelector(".js-header-menu-open-button");
  const closeButton = document.querySelector(".js-header-menu-close-button");

  if (!menu || !menuTop || !menuItems || !openButton || !closeButton) return;

  // --- メニューを開く処理 ---
  const openMenu = () => {
    gsap.killTweensOf([menu, menuTop, menuItems]);
    document.body.style.overflow = "hidden";
    openButton.classList.add("is-open");

    menu.showModal();

    const tl = gsap.timeline();

    // 1. 背景アニメーションをより早く（0.4秒 → 0.28秒など）
    tl.fromTo(menu, { autoAlpha: 0, scale: 1.01 }, { autoAlpha: 0.9, scale: 1, duration: 0.28, ease: "power2.out" });

    // 2. 上部ロゴ・ボタンも少し短く（0.8秒 → 0.6秒）
    tl.fromTo(menuTop, { y: -10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: "expo.out" }, "-=0.18");

    // 3. メニュー項目のアニメーションも全体的に短縮（0.8秒 → 0.55秒, スタッガーも狭める）
    menuItems.forEach((item, index) => {
      // 文字列セレクタ ".js-l-header-menu-text-en" で検索する
      const enText = item.querySelector(".js-l-header-menu-text-en");

      tl.fromTo(
        item,
        { y: 15, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          ease: "power3.out",
        },
        index === 0 ? "-=0.42" : "-=0.58",
      );

      // enTextが存在する場合のみアニメーションを追加（全体に合わせて短縮）
      if (enText) {
        tl.fromTo(enText, { letterSpacing: "0.3em", filter: "blur(2px)" }, { letterSpacing: "0.05em", filter: "blur(0px)", duration: 0.7, ease: "power2.out" }, "<");
      }
    });
  };

  // --- メニューを閉じる処理 ---（閉じアニメーションも0.4秒→0.28秒に短縮）
  const closeMenu = () => {
    gsap.to(menu, {
      autoAlpha: 0,
      duration: 0.28,
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
