import Game from "./Game";

export default class Cube {
    private readonly game: Game
    public x: number
    public y: number
    private readonly px: number;
    private readonly py: number;
    private readonly offset: number;
    public c: string;
    private size: number;

    constructor(game: Game, px: number, py:number, offset: number, size: number, c: string) {
        this.game = game
        this.px = px
        this.py = py
        this.offset = offset
        this.size = size
        this.x = 0
        this.y = 0
        this.c = c
    }

    update() {
        this.x = (Math.sin(this.game.frames / 60 * Math.PI * 2 * this.px + this.offset) / 2 + 0.5)
        this.y = Math.cos(this.x * Math.PI * this.py) / 2 + 0.5
    }

    render() {
        this.game.draw.Rect(
            (this.game.ctx.canvas.width - this.size) * this.x,
            (this.game.ctx.canvas.height - this.size) * this.y,
            this.size,
            this.c
        )
    }
}