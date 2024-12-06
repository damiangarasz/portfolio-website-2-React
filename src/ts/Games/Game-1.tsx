import { useEffect, useState } from "react";

const [picArr, picArrFn] = useState([]);

export function Game1() {
  return (
    <div className="board">
      <canvas className="game_canvas mx-auto mt-10 w-[750px] border border-black"></canvas>
      <div className="mt-4 text-center">
        Sterowanie: | a - left | d - right | w - jump | space - attack |
      </div>
    </div>
  );
}
