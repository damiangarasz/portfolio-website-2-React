import { useState, useRef } from "react";
import { ImageCache } from "./ImageCache";

const canvas = document.querySelector("#game_canvas");
const ctx = canvas.getContext("2d");

const imageCache = ImageCache();

// ----------- Tło początek

class srodowisko {
  constructor() {
    this.pierwszy = -50;
    this.drugi = -50;
    this.trzeci = -50;
  }
  drawPierwszy() {
    ctx.drawImage(pierwszyPlan, this.pierwszy, -245, 20000, 400);
  }

  drawDrugi() {
    ctx.drawImage(drugiPlan, this.drugi, -270);
  }
  drawTrzeci() {
    ctx.drawImage(trzeciPlan, this.trzeci, -50);
  }
}
const tlo = new srodowisko();

// ----------- Tło koniec

export function Game1() {
  console.log(imageCache.background);
  return (
    <div className="board">
      <canvas className="game_canvas mx-auto mt-10 w-[750px] border border-black"></canvas>
      <div className="mt-4 text-center">
        Sterowanie: | a - left | d - right | w - jump | space - attack |
      </div>
    </div>
  );
}
