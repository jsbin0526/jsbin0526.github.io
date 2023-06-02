export default class ProductionPage {
    render() {
        this.year = "all";
        return /*html*/`
        <script type="module">
            import Paginator from "../Paginator.js";
            $(() => {
                const paginator = new Paginator();
                let page_items = $(".page-item");
                console.log(page_items);
                $.each(page_items, (idx, elem) => {
                    elem.addEventListener("click", () => {
                        paginator.paginate(elem.innerText);
                    })
                })
            });
        </script>
        <h3>Year</h3>
        <nav>
            <ul class="pagination">
                <li class="page-item page-item-all active"><a class="page-link" href="javascript:void(0);">all</a></li>
                <li class="page-item page-item-2022"><a class="page-link" href="javascript:void(0);">2022</a></li>
                <li class="page-item page-item-2021"><a class="page-link" href="javascript:void(0);">2021</a></li>
                <li class="page-item page-item-2020"><a class="page-link" href="javascript:void(0);">2020</a></li>
            </ul>
        </nav>
        <div class="product-2022">
            <h3>2022</h3>
            <ul>
                <li>Online Judge Site 공동 개발</li>
            </ul>
        </div>
        <div class="product-2021">
            <h3>2021</h3>
            <ul>
                <li>학교 앱 공동제작(자율동아리)</li>
            </ul>
        </div>
        `;
    } 
}