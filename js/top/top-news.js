/**
 * トップページ 新着情報アニメーション
 */
export const initializeTopNews = () => {
  const title = document.querySelector(".js-top-news-title");
  const button = document.querySelector(".js-top-news-button");
  const list = document.querySelector(".js-top-news-list");
  const trigger = document.querySelector(".js-top-news-inner");

  if (!title || !button || !list || !trigger) return;

  // 1. タイトルとボタンを同時に、あるいは時間差で出す
  gsap.from([title, button], {
    y: 15,
    autoAlpha: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: trigger,
      start: "top 85%",
    },
  });

  // 2. 記事リストを1つずつズラして表示
  gsap.from(list.children, {
    y: 20,
    autoAlpha: 0,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: list,
      start: "top 80%",
    },
  });
};
