class TicTacToe {
    constructor() {
        this.canvas = $('#Tic-Tac-Toe');
        this.length = Math.min(this.canvas.parent().width(), this.canvas.parent().height());
        this.canvas.attr("width", this.length).attr("height", this.length);
        this.ctx = this.canvas[0].getContext('2d');
        this.ctx.beginPath();
        this.ctx.rect(20, 40, 50, 50)
        this.ctx.fillStyle = 'rgb(0, 0, 0)';
        this.ctx.fill();
        this.ctx.closePath();
    }
}

$(document).ready(() => {
    const game = new TicTacToe();
})
