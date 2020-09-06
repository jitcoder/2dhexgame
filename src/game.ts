export default class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private delta: number;
  private lastRenderTime: number;
  private isRunning: boolean;
  private worldWidth: number;
  private worldHeight: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if(!ctx) {
      throw new Error('unable to get 2d context');
    }

    this.ctx = ctx;
    this.delta = 0;
    this.lastRenderTime = Date.now();
    this.isRunning = true;
    this.render = this.render.bind(this);
    this.worldHeight = 10000;
    this.worldWidth = 10000;

    this.render();
  }

  render() {
    const now = Date.now();
    this.delta = now - this.lastRenderTime;
    this.lastRenderTime = now;

    if (this.isRunning) {
      window.requestAnimationFrame(this.render);
    }
  }
}
