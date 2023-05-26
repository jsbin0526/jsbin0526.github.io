export default class TicTacToe {
    constructor() {
        this.canvas = $('#Tic-Tac-Toe');
        this.canvasSize = Math.max(this.canvas.parent().width(), this.canvas.parent().height()) / 2;
        this.canvas.attr("width", this.canvasSize).attr("height", this.canvasSize);
        this.restartButton = $('.restart-button');
        this.restartButton.on('click', () => {
            if (!this.isQuit)
                this.#quit();
            this.#init();
        })
        this.undoButton = $('.undo-button');
        this.ctx = this.canvas[0].getContext('2d');
        this.ctx.beginPath();
        this.boxLength = this.canvasSize / 3;
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        let sec = 300;
        let timer = null;
        $(window).bind('resize', () => {
            clearTimeout(timer);
            setTimeout(() => {
                this.canvasSize = Math.max(this.canvas.parent().width(), this.canvas.parent().height()) / 2;
                this.boxLength = this.canvasSize / 3;
                this.canvas.attr("width", this.canvasSize).attr("height", this.canvasSize);
                this.#draw();
            }, sec);
        });
        this.#init();
    }

    #init() {
        this.isQuit = false;
        this.undoButton.on('click', this.#undo.bind(this));
        this.box = new Array(3).fill('').map(() => new Array(3).fill(''));
        this.currentUser = 'O';
        this.history = new Array(0);
        this.#draw();
        this.canvas.on('click', this.#handleCanvasClick.bind(this));
    }

    #handleCanvasClick(e) {
        let pos = this.#getMousePos(e).map((elem) => Math.floor(elem / this.boxLength));
        let x = pos[0];
        let y = pos[1];
        if (this.#isValidPos(x, y)) {
            this.#putPlayer(x, y, this.currentUser);
            if (this.#gameEndCheck(x, y)) {
                this.#win();
                this.#quit();
            }
            if (this.#isBoardFull()) {
                this.#tie();
                this.#quit();
            }
            this.currentUser = this.currentUser == 'O' ? 'X' : 'O';
            this.#draw();
        }
    }

    #isValidPos(x, y) {
        if (!this.box[y][x])
            return true;
        return false;
    }

    #putPlayer(x, y, mark) {
        this.box[y][x] = mark;
        this.history.push([x, y]);
    }

    #gameEndCheck(x, y) {
        let ret = true;
        for (let j = 0; j < 3; j++)
            if (this.box[y][j] != this.currentUser)
                ret = false;
        if (ret)
            return true;
        ret = true;
        for (let i = 0; i < 3; i++)
            if (this.box[i][x] != this.currentUser)
                ret = false;
        if (ret)
            return true;
        if (x == y || 2-x == y) {
            ret = true;
            for (let i = 0; i < 3; i++)
                if (this.box[i][i] != this.currentUser && this.box[2-i][i] != this.currentUser)
                    ret = false;
            if (ret)
                return true;
        }
    }
    
    #isBoardFull() {
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++) {
                console.log(this.box[i][j]);
                if (this.box[i][j] == '')
                    return false;
            }
        return true;
    }

    #getMousePos(event) {
        const clientRect = this.canvas[0].getBoundingClientRect();
        return [event.clientX - clientRect.left, event.clientY - clientRect.top];
    }

    #drawLines() {
        for (let i = 1; i < 3; i++) {
            this.ctx.moveTo(this.boxLength * i, 0);
            this.ctx.lineTo(this.boxLength * i, this.canvasSize);
            this.ctx.stroke();
        }
        for (let i = 1; i < 3; i++) {
            this.ctx.moveTo(0, this.boxLength * i);
            this.ctx.lineTo(this.canvasSize, this.boxLength * i);
            this.ctx.stroke();
        }
    }

    #drawStone() {
        this.ctx.font = "10vw san-serif";
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.ctx.fillText(this.box[i][j], j * this.boxLength + this.boxLength / 2, i * this.boxLength + this.boxLength / 2);
            }
        }
    }

    #draw() {
        this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
        this.#drawLines();
        this.#drawStone();
    }

    #quit() {
        this.isQuit = true;
        this.canvas.off("click");
        this.undoButton.off("click");
        this.ctx.closePath();
    }

    #win() {
        this.ctx.font = "10vw san-serif";
        this.ctx.fillText("Player " + this.currentUser + " wins!", 0, 0)
        console.log("Player " + this.currentUser + " wins!");
    }

    #tie() {
        this.ctx.font = "10vw san-serif";
        this.ctx.fillText("draw", 0, 0)
        console.log("Draw!");
    }

    #undo() {
        let last;
        if (!(last = this.history.pop()))
            return false;
        let x = last[0];
        let y = last[1]
        this.box[y][x] = '';
        this.#draw();
        this.currentUser = this.currentUser == 'O' ? 'X' : 'O';
        return true;
    }
}