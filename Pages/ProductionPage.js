export default class ProductionPage {
    render() {
        this.year = "all";
        return /*html*/`
        <script type="module">
            import Paginator from "../Paginator.js";
            $(() => {
                const paginator = new Paginator();
                let page_items = $(".page-item");
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
                <li class="page-item page-item-2019"><a class="page-link" href="javascript:void(0);">2019</a></li>
            </ul>
        </nav>
        <div class="product-2022">
            <h3>2022</h3>
            <ul>
                <li>Online Judge Site 공동 개발(React & nestjs)</li>
            </ul>
        </div>
        <div class="product-2021">
            <h3>2021</h3>
            <ul>
                <li>학교 앱 공동제작(Flutter & Firebase) </li>
                <li><a href="https://github.com/jsbin0526/gongjjang.com">React와 nodejs로 다시 만든 웹 사이트(React & Express)</a></li>
            </ul>
        </div>
        <div class="product-2020">
            <h3>2020</h3>
            <ul>
                <li>유저 가입과 게시판 CRUD가 가능한 간단한 웹 사이트(PHP)</li>
                <li><a href="../Files/Kepler_s_laws_of_planetary_motion.py" download>지구과학 시간때 배운 케플러 법칙</a></li>
                <li><a href="../Files/Physics.zip" download>유튜브에서 흥미로운 영상을 보고 만든 물리 시뮬레이션</a><br/><a href="https://www.youtube.com/watch?v=jsYwFizhncE">유튜브 링크</a></li>
            </ul>
        </div>
        <div class="product-2019">
            <h3>2019</h3>
            <ul>
                <li><a href="../Files/baseball_game.py" download>파이썬으로 만든 야구게임</a></li>
                <li><a href="../Files/snake_game.py" download>파이썬으로 만든 뱀게임</a></li>
                <li><a href="../Files/196_palindrome_quest.py" download>신기해서 파이썬으로 만든 196 회문문제</a></li>\
            </ul>
        </div>
        `;
    } 
}