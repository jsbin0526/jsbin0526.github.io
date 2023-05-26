export default class GamePage {
    render () {
        return `
            <canvas id="Tic-Tac-Toe"></canvas>
            <script src="TicTacToe.js" type="module"></script>
            <script type="module">
                import TicTacToe from "../TicTacToe.js";
                $(document).ready(() => {
                    let game = new TicTacToe();
                })
            </script>
            <br/>
            <button class="restart-button">Restart</button>
            <button class="undo-button">Undo</button>
        `;
    }
}