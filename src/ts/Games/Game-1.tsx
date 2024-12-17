import { useEffect } from "react";
import { ImageCache } from "./ImageCache";

export function Game1() {
  useEffect(() => {
    const canvas = document.querySelector("#game_canvas") as HTMLCanvasElement;
    if (!canvas) {
      console.error("Canvas element nie został znaleziony.");
      return;
    }

    const ctx = canvas.getContext("2d")!;
    if (!ctx) {
      console.error("Nie udało się uzyskać kontekstu 2D dla canvas.");
      return;
    }

    const imageCache = ImageCache();

    //tło początek --------
    class srodowisko {
      pierwszy: number;
      drugi: number;
      trzeci: number;

      constructor() {
        this.pierwszy = -50;
        this.drugi = -50;
        this.trzeci = -50;
      }
      drawPierwszy() {
        ctx.drawImage(imageCache.pierwszyPlan, this.pierwszy, -245, 20000, 400);
      }
      drawDrugi() {
        ctx.drawImage(imageCache.drugiPlan, this.drugi, -270);
      }
      drawTrzeci() {
        ctx.drawImage(imageCache.trzeciPlan, this.trzeci, -50);
      }
    }

    //tło koniec --------
    // hero początek ------

    const key = {
      lewo: { pressed: false },
      prawo: { pressed: false },
      skok: { pressed: false },
      atak: { pressed: false },
    };

    class hero {
      img;
      pos;
      frame;
      currWidth;
      maxframes;
      state;
      velocity;
      weight;
      switched;
      isJumping;
      moving;
      constructor({
        img,
        pos,
      }: {
        img: HTMLImageElement;
        pos: { x: number; y: number };
      }) {
        this.img = img;
        this.pos = pos;
        this.frame = 0;
        this.currWidth = 64;
        this.maxframes = 3;
        this.state = "idle";
        this.velocity = 0;
        this.weight = 2;
        this.switched = false;
        this.isJumping = false;
        this.moving = false;
      }

      isStanding() {
        return this.pos.y >= 75;
      }

      jump() {
        if (key.skok.pressed && this.isStanding()) {
          this.velocity = -5;
          this.img = imageCache.heroJump;
          this.maxframes = 15;
          this.isJumping = true;
        }
        this.pos.y += this.velocity;

        if (!this.isStanding()) {
          this.velocity += this.weight;
        } else {
          this.velocity = 0;
          this.img = imageCache.heroIdle;
          this.maxframes = 3;
          this.isJumping = false;
        }
      }

      dead() {
        this.img = imageCache.heroDead;
        console.log(this.img);
      }

      draw() {
        if (this.frame < this.maxframes) this.frame++;
        else this.frame = 0;

        if (
          !key.prawo.pressed &&
          !key.skok.pressed &&
          this.isJumping == false
        ) {
          damian.img = imageCache.heroIdle;
          damian.maxframes = 3;
          damian.currWidth = 64;
        }
        if (!key.lewo.pressed && !key.skok.pressed && this.isJumping == false) {
          damian.img = imageCache.heroIdle;
          damian.maxframes = 3;
          damian.currWidth = 64;
        }

        if (key.prawo.pressed && key.skok.pressed && this.isJumping == false) {
          this.maxframes = 15;
          // this.img = heroJump;
          this.currWidth = 64;
          if (this.pos.x >= 100) {
            this.pos.x = 100;
          } else {
            this.pos.x += 5;
          }
          tlo.drugi -= 2;
          tlo.trzeci -= 0.5;
          tlo.pierwszy -= 4;
        } else if (
          key.lewo.pressed &&
          key.skok.pressed &&
          this.isJumping == false
        ) {
          this.maxframes = 15;
          this.img = imageCache.heroWalkR;
          this.currWidth = 64;
          if (this.pos.x >= 100) {
            this.pos.x = 100;
          } else {
            this.pos.x += 5;
          }
          tlo.drugi -= 2;
          tlo.trzeci -= 0.5;
          tlo.pierwszy -= 4;
        } else if (key.prawo.pressed && this.isJumping == false) {
          this.maxframes = 4;
          this.img = imageCache.heroWalkR;
          this.currWidth = 80;
          if (this.pos.x >= 100) {
            this.pos.x = 100;
          } else {
            this.pos.x += 5;
          }
          tlo.drugi -= 2;
          tlo.trzeci -= 0.5;
          tlo.pierwszy -= 4;
        } else if (key.lewo.pressed && this.isJumping == false) {
          damian.img = imageCache.heroWalkL;
          this.currWidth = 80;
          damian.maxframes = 4;
          if (damian.pos.x <= -10) {
            damian.pos.x = -10;
          } else {
            damian.pos.x -= 5;
            tlo.drugi += 2;
            tlo.trzeci += 0.5;
            tlo.pierwszy += 4;
          }
        }

        ctx.drawImage(
          this.img,
          this.frame * this.currWidth,
          0,
          this.currWidth,
          80,
          this.pos.x,
          this.pos.y,
          this.currWidth,
          80,
        );

        this.jump();
      }
    }

    const damian = new hero({
      img: imageCache.heroIdle,
      pos: {
        x: 50,
        y: 75,
      },
    });

    // hero koniec -------

    //rysowanie na canvasie początek --------
    function lol() {
      const tlo = new srodowisko();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(imageCache.background, 0, 0, 600, 200);
      tlo.drawTrzeci();
      tlo.drawDrugi();
      tlo.drawPierwszy();

      damian.draw();
      // requestAnimationFrame(lol);
    }
    // requestAnimationFrame(lol);
    setInterval(lol, 100);

    //rysowanie na canvasie koniec --------
  }, []);

  return (
    <div className="board">
      <canvas
        id="game_canvas"
        className="game_canvas mx-auto mt-10 w-[750px] border border-black"
      ></canvas>
      <div className="mt-4 text-center">
        Sterowanie: | a - left | d - right | w - jump | space - attack |
      </div>
    </div>
  );
}
