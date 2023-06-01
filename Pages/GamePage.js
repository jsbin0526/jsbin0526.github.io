export default class GamePage {
    render () {
        return `
            <h1>2-Player Tic-Tac-Toe Game</h1>
            <br/>
            <canvas id="Tic-Tac-Toe"></canvas>
            <script src="TicTacToe.js" type="module"></script>
            <script type="module">
                import TicTacToe from "../TicTacToe.js";
                $(document).ready(() => {
                    let game = new TicTacToe();
                })
            </script>
            <br/><br/>
            <h1 class="game-end-display" style=display:none;>Error!<h1/>
            <button class="restart-button">Restart</button>
            <button class="undo-button">Undo</button>
        `;
    }
}