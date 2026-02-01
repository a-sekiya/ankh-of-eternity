/**
 * トップページ ローディング画面
 */

import { initializeTopKvText } from "./top-kv-text.js";

export const initializeTopLoading = () => {
  const loading = document.querySelector(".js-top-loading");
  const logo = document.querySelector(".js-top-loading-logo");
  const bar = document.querySelector(".js-top-loading-bar");
  const leftCurtain = document.querySelector(".js-top-loading-curtain-left");
  const rightCurtain = document.querySelector(".js-top-loading-curtain-right");
  const pageWrap = document.querySelector(".js-page-wrap");

  if (!loading || !logo || !bar || !leftCurtain || !rightCurtain || !pageWrap) return;

  const tl = gsap.timeline();

  // 1. 初期状態のリセット
  gsap.set(pageWrap, { opacity: 1 });
  gsap.set(loading, { opacity: 1, display: "flex" });
  gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
  gsap.set(logo, { opacity: 0, y: 20 });

  // 2. ロゴをふわっと出現させる
  tl.to(logo, {
    opacity: 1,
    y: 0,
    duration: 1.0,
    ease: "power2.out",
  });

  // 3. プログレスバーを伸ばす
  tl.to(
    bar,
    {
      scaleX: 1,
      duration: 1.2,
      ease: "expo.inOut",
    },
    "-=0.3"
  );

  // 4. ロゴとバーを消す
  tl.to(
    [logo, bar],
    {
      opacity: 0,
      y: -10,
      duration: 0.4,
      ease: "power2.in",
    },
    "-=0.1"
  );

  // 5. 左右の幕を開く
  tl.to(leftCurtain, { xPercent: -100, duration: 1.0, ease: "expo.inOut" }, "+=0.2").to(rightCurtain, { xPercent: 100, duration: 1.0, ease: "expo.inOut" }, "<");

  tl.add(() => {
    initializeTopKvText();
  }, "-=0.6");

  // 6. ローディング画面を非表示にする
  tl.to(
    loading,
    {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        loading.style.display = "none";
      },
    },
    "-=0.5"
  );
};
