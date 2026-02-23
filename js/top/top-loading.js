/**
 * トップページ ローディング画面
 */
export const initializeTopLoading = () => {
  const loading = document.querySelector(".js-top-loading");
  const logo = document.querySelector(".js-top-loading-logo");
  const bar = document.querySelector(".js-top-loading-bar");
  const barWrap = document.querySelector(".top-loading-bar-wrap");
  const leftCurtain = document.querySelector(".js-top-loading-curtain-left");
  const rightCurtain = document.querySelector(".js-top-loading-curtain-right");
  const pageWrap = document.querySelector(".js-page-wrap");
  const en = document.querySelector(".js-top-kv-text-en");
  const jp = document.querySelector(".js-top-kv-text-ja");

  if (!loading || !logo || !bar || !leftCurtain || !rightCurtain || !pageWrap) return;

  const onContentLoaded = () => {
    const tl = gsap.timeline();

    // 初期状態のリセット
    gsap.set(pageWrap, { opacity: 1 });
    gsap.set(loading, { opacity: 1, display: "flex" });
    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(logo, { opacity: 0, y: 20 });

    tl
      // 2. ロゴをふわっと出現させる
      .to(logo, {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power2.out",
      })

      // 3. プログレスバーを伸ばす
      .to(
        bar,
        {
          scaleX: 1,
          duration: 1.0,
          ease: "expo.inOut",
        },
        "-=0.3",
      )

      // 4. ローディングUI（バーとロゴ）をスッと消す
      .to(
        [bar, barWrap, logo],
        {
          opacity: 0,
          y: -15,
          duration: 0.3,
          ease: "power2.in",
        },
        "+=0.1",
      )

      // 5. 左右の幕を開く
      .to(
        leftCurtain,
        {
          xPercent: -100,
          duration: 1.0,
          ease: "expo.inOut",
        },
        ">",
      )
      .to(
        rightCurtain,
        {
          xPercent: 100,
          duration: 1.0,
          ease: "expo.inOut",
        },
        "<",
      )

      // 6. KVテキストのアニメーション
      .from(
        en,
        {
          y: 40,
          autoAlpha: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=0.6",
      )
      .from(
        jp,
        {
          y: 25,
          autoAlpha: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=1.0",
      )

      // 7. ローディング画面を完全に非表示にする
      .to(
        loading,
        {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            loading.style.display = "none";
            // body.style.overflow = "auto"; 削除しました
          },
        },
        "-=0.5",
      );
  };

  // リソースの読み込み状態を確認
  if (document.readyState === "complete") {
    onContentLoaded();
  } else {
    window.addEventListener("load", onContentLoaded);
  }
};
