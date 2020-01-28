import key from 'keymaster'
import Player from './player'

const FPS = 60;

class GameView {
  constructor(ctx) {
    // this.game = game;
    this.ctx = ctx;
    this.player = new Player
  }

  start() {
    const gameLoop = setInterval(() => {
      this.ctx.clearRect(0, 0, 800, 700);
      this.checkKey();
      // this.game.step();
      // this.game.draw(this.ctx);
      this.player.draw(this.ctx);
    }, 1000 / FPS)
  }

  checkKey() {
    if (key.isPressed('w')) {
      this.player.pos[1] -= 2
    }
    if (key.isPressed('a')) {
      this.player.pos[0] -= 2
    }
    if (key.isPressed('s')) {
      this.player.pos[1] += 2
    }
    if (key.isPressed('d')) {
      this.player.pos[0] += 2
    }
  }
}

export default GameView;