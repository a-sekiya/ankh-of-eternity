import { initializeHamburgerMenu } from "./component/hamburgermenu.js";
import { switchViewport } from "./utility/switch-viewport.js";

// 画面の幅に応じてビューポートの設定を切り替え
switchViewport();
window.addEventListener("resize", switchViewport);

// 各機能の初期化
initializeHamburgerMenu();
