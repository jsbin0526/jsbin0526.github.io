import Router from './Router.js';
import GamePage from './Pages/GamePage.js';
import ProductionPage from './Pages/ProductionPage.js';

const paths = {'#game': new GamePage, '#production': new ProductionPage}
const router = new Router(paths);

const menu_toggle_button = $(".menu-toggle");
const menu = $(".menu");
let menu_toggle = menu_toggle_button.css('display') == "span";
menu_toggle_button.on('click', () => {
    menu_toggle = !menu_toggle;
});
