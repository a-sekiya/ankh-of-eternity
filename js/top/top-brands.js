/**
 * トップページ 取り扱いブランドアニメーション
 */

export const initializeTopBrands = () => {
  const trigger = document.querySelector(".js-top-brands-trigger");
  const title = document.querySelector(".js-top-brands-title");
  const items = document.querySelectorAll(".js-top-brands-item");

  if (!trigger || !title || items.length === 0) return;

  // 1. セクションタイトルの表示
  gsap.from(title, {
    y: 30,
    autoAlpha: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: trigger,
      start: "top 85%",
    },
  });

  // 2. 各カードが「近づいてきたら」個別に出るようにループ処理
  items.forEach((item) => {
    gsap.from(item, {
      y: 40,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        once: true,
      },
    });
  });
};
