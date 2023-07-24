import "./scss/style.scss";
import start from "./js/start.js";
import music from "./js/music.js";
import tetris from "./js/tetris.js";

const musicIcon = document.querySelector(".icon__box .icon1");
const tetrisIcon = document.querySelector(".icon__box .icon2");


musicIcon.addEventListener("click", () => {
    document.querySelector(".music__wrap").classList.toggle("active");
    music();

})
start();
// music();
tetris();

