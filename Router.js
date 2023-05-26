import InstructionPage from "./Pages/InstructionPage.js"

export default class Router {
    constructor(paths) {
        this.app = $("#app")

        window.onhashchange = () => {
            this.route(paths)
        }

        window.onload = () => {
            this.route(paths)
        }
    }

    route(paths) {
        this.currentPagePath = window.location.hash
        if (this.currentPagePath in paths) {
            delete this.page;
            this.page = paths[this.currentPagePath].render();
        }
        else {
            this.page = (new InstructionPage).render();
        }
        $("#app").html(this.page);
    }
}