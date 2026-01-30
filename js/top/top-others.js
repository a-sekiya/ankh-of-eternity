/**
 * トップページ 旅行案内・採用情報アニメーション
 */
export const initializeTopOthers = () => {
  const trigger = document.querySelector(".js-top-others");
  const cards = document.querySelectorAll(".js-top-others-card");

  if (!trigger || cards.length === 0) return;

  let mm = gsap.matchMedia();

  mm.add("(min-width: 950px)", () => {
    gsap.from(cards, {
      y: 20,
      autoAlpha: 0,
      duration: 1.6,
      stagger: 0.25,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
      },
    });
  });

  mm.add("(max-width: 949px)", () => {
    cards.forEach((card) => {
      gsap.from(card, {
        y: 15,
        autoAlpha: 0,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  });
};
