/**
 * トップページ：Scrollボタン
 */
export const initializeScrollBtn = () => {
  const scrollBtn = document.querySelector(".js-top-kv-scroll");
  const targetSection = document.querySelector(".js-top-news");

  if (!scrollBtn || !targetSection) return;

  scrollBtn.addEventListener("click", () => {
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
};
