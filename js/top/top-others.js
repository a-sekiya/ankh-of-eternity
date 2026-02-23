/**
 * トップページ 旅行案内・採用情報アニメーション
 */
export const initializeTopOthers = () => {
  const trigger = document.querySelector(".js-top-others");
  const cards = document.querySelectorAll(".js-top-others-card");

  if (!trigger || cards.length === 0) return;

  let mm = gsap.matchMedia();

  // PC: まとめて順番に出す
  mm.add("(min-width: 950px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
        once: true,
      },
    });

    tl.to(trigger, {
      onStart: () => trigger.classList.add("is-active"),
      duration: 0.1,
    }).from(
      cards,
      {
        y: 20,
        autoAlpha: 0,
        duration: 1.6,
        stagger: 0.25,
        ease: "power2.out",
      },
      "+=0.2",
    ); // 背景が出て少ししてからカード開始
  });

  // SP: 各カードが画面に入ったら個別に出す
  mm.add("(max-width: 949px)", () => {
    // 背景テキストだけ先にトリガー
    gsap.to(trigger, {
      scrollTrigger: {
        trigger: trigger,
        start: "top 90%",
        once: true,
        onEnter: () => trigger.classList.add("is-active"),
      },
    });

    // カードは個別
    cards.forEach((card) => {
      gsap.from(card, {
        y: 15,
        autoAlpha: 0,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          once: true,
        },
      });
    });
  });
};
