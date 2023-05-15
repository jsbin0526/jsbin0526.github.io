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
            this.page = paths[this.currentPagePath].render()
        }
        else {
            this.page = (new InstructionPage).render()
        }
        console.log(this.page);
        $("#app").html(this.page);
    }
}