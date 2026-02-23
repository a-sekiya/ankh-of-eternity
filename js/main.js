import { initializeHamburgerMenu } from "./component/hamburgermenu.js";
import { initializeScrollBtn } from "./top/scroll-btn.js";
import { initializeTopBrands } from "./top/top-brands.js";
import { initializeTopConcept } from "./top/top-concept.js";
import { initializeTopLoading } from "./top/top-loading.js";
import { initializeTopNews } from "./top/top-news.js";
import { initializeTopOthers } from "./top/top-others.js";
import { switchViewport } from "./utility/switch-viewport.js";

// 画面の幅に応じてビューポートの設定を切り替え
switchViewport();
window.addEventListener("resize", switchViewport);

// 各機能の初期化
initializeHamburgerMenu();
initializeScrollBtn();
initializeTopNews();
initializeTopBrands();
initializeTopConcept();
initializeTopOthers();
initializeTopLoading();
