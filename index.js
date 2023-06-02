import Router from './Router.js';
import GamePage from './Pages/GamePage.js';
import ProductionPage from './Pages/ProductionPage.js';

const paths = {'#game': new GamePage(), '#production': new ProductionPage()}
const router = new Router(paths);

const button_icon = $(".menu-toggle > img");
const menu = $(".menu");
let menu_toggle = true;
button_icon.on('click', () => {
    menu_toggle = !menu_toggle;
    button_icon.attr('src', menu_toggle ? "/Images/hamburger_button.svg" : "/Images/close_button.svg");
    menu.toggleClass("menu-show");
});