import { useEffect, useState } from "react";
import { MovingPieces } from "./movingPieces";

export function Game2() {
  useEffect(() => {
    //usuwam defalutowe działanie przeciągania elementu
    const test = document.querySelectorAll(".chess-grid div");
    function preventDefaultDrag(event: DragEvent) {
      event.preventDefault();
    }
    for (let n of test) {
      n.addEventListener("dragstart", preventDefaultDrag as EventListener);
    }

    return () => {
      for (let n of test) {
        n.removeEventListener("dragstart", preventDefaultDrag as EventListener);
      }
    };
  });

  //początek określania wielkości boardu
  const [rozmiarOkna, setRozmiarOkna] = useState(() => {
    let temp = window.innerWidth * 0.6;
    if (temp >= 580) {
      temp = 580;
    }

    const ret = {
      width: temp + "px",
      height: temp + "px",
    };

    return ret;
  });

  useEffect(() => {
    function resize() {
      let temp = window.innerWidth * 0.6;
      if (temp >= 580) {
        temp = 580;
      }
      const rozmiar = {
        width: temp + "px",
        height: temp + "px",
      };
      setRozmiarOkna(rozmiar);
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  });
  //koniec określania wielkości boardu

  MovingPieces();

  return (
    <div className="chess-grid mx-auto" style={rozmiarOkna}>
      <div id="s1" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/br.png"
        />
      </div>
      <div id="s2" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bn.png"
        />
      </div>
      <div id="s3" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bb.png"
        />
      </div>
      <div id="s4" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bq.png"
        />
      </div>
      <div id="s5" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bk.png"
        />
      </div>
      <div id="s6" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bb.png"
        />
      </div>
      <div id="s7" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bn.png"
        />
      </div>
      <div id="s8" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/br.png"
        />
      </div>
      <div id="s9" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bp.png"
        />
      </div>
      <div id="s10" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bp.png"
        />
      </div>
      <div id="s11" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bp.png"
        />
      </div>
      <div id="s12" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bp.png"
        />
      </div>
      <div id="s13" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bp.png"
        />
      </div>
      <div id="s14" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bp.png"
        />
      </div>
      <div id="s15" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bp.png"
        />
      </div>
      <div id="s16" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/bp.png"
        />
      </div>
      <div id="s17" className="relative"></div>
      <div id="s18" className="relative"></div>
      <div id="s19" className="relative"></div>
      <div id="s20" className="relative"></div>
      <div id="s21" className="relative"></div>
      <div id="s22" className="relative"></div>
      <div id="s23" className="relative"></div>
      <div id="s24" className="relative"></div>
      <div id="s25" className="relative"></div>
      <div id="s26" className="relative"></div>
      <div id="s27" className="relative"></div>
      <div id="s28" className="relative"></div>
      <div id="s29" className="relative"></div>
      <div id="s30" className="relative"></div>
      <div id="s31" className="relative"></div>
      <div id="s32" className="relative"></div>
      <div id="s33" className="relative"></div>
      <div id="s34" className="relative"></div>
      <div id="s35" className="relative"></div>
      <div id="s36" className="relative"></div>
      <div id="s37" className="relative"></div>
      <div id="s38" className="relative"></div>
      <div id="s39" className="relative"></div>
      <div id="s40" className="relative"></div>
      <div id="s41" className="relative"></div>
      <div id="s42" className="relative"></div>
      <div id="s43" className="relative"></div>
      <div id="s44" className="relative"></div>
      <div id="s45" className="relative"></div>
      <div id="s46" className="relative"></div>
      <div id="s47" className="relative"></div>
      <div id="s48" className="relative"></div>
      <div id="s49" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wp.png"
        />
      </div>
      <div id="s50" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wp.png"
        />
      </div>
      <div id="s51" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wp.png"
        />
      </div>
      <div id="s52" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wp.png"
        />
      </div>
      <div id="s53" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wp.png"
        />
      </div>
      <div id="s54" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wp.png"
        />
      </div>
      <div id="s55" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wp.png"
        />
      </div>
      <div id="s56" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wp.png"
        />
      </div>
      <div id="s57" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wr.png"
        />
      </div>
      <div id="s58" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wn.png"
        />
      </div>
      <div id="s59" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wb.png"
        />
      </div>
      <div id="s60" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wq.png"
        />
      </div>
      <div id="s61" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wk.png"
        />
      </div>
      <div id="s62" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wb.png"
        />
      </div>
      <div id="s63" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wn.png"
        />
      </div>
      <div id="s64" className="relative">
        <img
          className="myImage"
          src="https://raw.githubusercontent.com/damiangarasz/portfolio-website-2-React/refs/heads/main/docs/img/Game-2/wr.png"
        />
      </div>
    </div>
  );
}
