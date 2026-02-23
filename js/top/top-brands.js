/**
 * トップページ 取り扱いブランドアニメーション
 */
export const initializeTopBrands = () => {
  const trigger = document.querySelector(".js-top-brands-trigger");
  const title = document.querySelector(".js-top-brands-title");
  const items = document.querySelectorAll(".js-top-brands-item");

  if (!trigger || !title || items.length === 0) return;

  // タイムラインを作成（ScrollTriggerと連動）
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top 70%", // セクションが画面の7割に入ったら開始
      once: true,
    },
  });

  tl
    // 1. まず背景の文字 (::before) をふわっと出す
    .to(trigger, {
      onStart: () => trigger.classList.add("is-active"),
      duration: 0.1, // クラス付与のきっかけ用
    })

    // 2. タイトルを表示
    .from(
      title,
      {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
      },
      "+=0.3",
    ) // 背景が出始めてから少し遅れて開始

    // 3. 各アイテムを順番に表示 (staggerを使用)
    .from(
      items,
      {
        y: 40,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2, // 0.2秒ずつズレて表示される
      },
      "-=0.5",
    ); // タイトルが終わる少し前から開始
};
