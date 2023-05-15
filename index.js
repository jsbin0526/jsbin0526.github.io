import Router from './Router.js';
import GamePage from './Pages/GamePage.js';
import ProductionPage from './Pages/ProductionPage.js';

const paths = {'#game': new GamePage(), '#production': new ProductionPage()}
const router = new Router(paths);

const button_icon = $(".menu-toggle > img");
const menu = $(".menu");
let menu_toggle = true;
button_icon.on('click', () => {
    console.log(menu_toggle);
    menu_toggle = !menu_toggle;
    button_icon.attr('src', menu_toggle ? "hamburger_button.svg" : "close_button.svg");
    menu.css('display', menu_toggle ? "none" : "block");
});