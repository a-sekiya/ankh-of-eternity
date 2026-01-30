/**
 * トップページ コンセプトアニメーション
 */
export const initializeTopConcept = () => {
  const trigger = document.querySelector(".js-top-concept");
  const img = document.querySelector(".js-top-concept-img");
  const title = document.querySelector(".js-top-concept-title");
  const texts = document.querySelectorAll(".js-top-concept-text, .js-top-concept-text02");

  if (!trigger || !img || !title) return;

  let mm = gsap.matchMedia();

  // PC: まとまって順番に出る（タイムライン）
  mm.add("(min-width: 1080px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
      },
    });

    tl.from(img, { autoAlpha: 0, duration: 1.2, ease: "power1.out" }).from(title, { y: 15, autoAlpha: 0, duration: 1.0, ease: "power2.out" }, "-=1.0").from(texts, { y: 15, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.8");
  });

  // SP: 各要素が近づいたら個別に出る
  mm.add("(max-width: 1079px)", () => {
    gsap.from(img, {
      autoAlpha: 0,
      duration: 1.0,
      scrollTrigger: {
        trigger: img,
        start: "top 90%",
      },
    });

    gsap.from(title, {
      y: 15,
      autoAlpha: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: title,
        start: "top 90%",
      },
    });

    texts.forEach((text) => {
      gsap.from(text, {
        y: 15,
        autoAlpha: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: text,
          start: "top 95%",
        },
      });
    });
  });
};
