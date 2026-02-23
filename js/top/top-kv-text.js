/**
 * トップページ：KVのテキストのアニメーション
 */
export const initializeTopKvText = () => {
  const en = document.querySelector(".js-top-kv-text-en");
  const jp = document.querySelector(".js-top-kv-text-ja");

  if (!en || !jp) return;

  const tl = gsap.timeline();

  tl.from(en, {
    y: 40,
    duration: 1.8,
    ease: "power2.out",
  }).from(
    jp,
    {
      y: 25,
      duration: 1.5,
      ease: "power2.out",
    },
    "-=1.2",
  );
};
