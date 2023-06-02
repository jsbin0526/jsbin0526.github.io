export default class ProductionPage {
    navigate(year) {
        
    }

    render() {
        return /*html*/`
        <h3>Year</h3>
        <nav>
            <ul class="pagination">
                <li class="page-item active"><a class="page-link">All</a></li>
                <li class="page-item"><a class="page-link">2022</a></li>
                <li class="page-item"><a class="page-link">2021</a></li>
                <li class="page-item"><a class="page-link">2020</a></li>
            </ul>
        </nav>
        <h3>2022</h3>
        <ul>
            <li><a href="https://www.codeduri.kangwon.ac.kr">코드두리(서버 작동 안함)</a></li>
        </ul>
        `;
    } 
}