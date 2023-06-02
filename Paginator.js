export default class Paginator {
    constructor() {
        this.year = "all";
    }

    paginate(year) {
        if (this.year !== year) {
            console.log($(".page-item"-+this.year));
            $(".page-item-"+this.year).removeClass("active");
            $(".page-item-"+year).addClass("active");
            if (year === "all") {
                for (let i = 2020; i < 2023; i++) {
                    $(".product-" + i).removeClass("hide");
                }
            } else if (this.year === "all") {
                for (let i = 2020; i < 2023; i++) {
                    if (i != year) {
                        $(".product-" + i).addClass("hide");
                    }
                }
            } else {
                $(".product-" + year).removeClass("hide");
                $(".product-" + this.year).addClass("hide");
            }
            this.year = year;
        }
    }
}