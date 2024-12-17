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

    const tlo = new srodowisko();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imageCache.background, 0, 0, 600, 200);
    tlo.drawTrzeci();
    tlo.drawDrugi();
    tlo.drawPierwszy(); // Przykład użycia
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
