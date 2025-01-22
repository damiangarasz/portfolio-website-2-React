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
  const [rozmiarOkna, setRozmiarOkna] = useState(
    () => {
      let temp = window.innerWidth * 0.6;
      if (temp >= 580) {
        temp = 580;
      }

      const ret = {
        width: temp + "px",
        height: temp + "px",
      };

      return ret;
    },
  );

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
      <div id="s1">
        <img className="myImage" src="./img/Game-2/br.png" />
      </div>
      <div id="s2">
        <img className="myImage" src="./img/Game-2/bn.png" />
      </div>
      <div id="s3">
        <img className="myImage" src="./img/Game-2/bb.png" />
      </div>
      <div id="s4">
        <img className="myImage" src="./img/Game-2/bq.png" />
      </div>
      <div id="s5">
        <img className="myImage" src="./img/Game-2/bk.png" />
      </div>
      <div id="s6">
        <img className="myImage" src="./img/Game-2/bb.png" />
      </div>
      <div id="s7">
        <img className="myImage" src="./img/Game-2/bn.png" />
      </div>
      <div id="s8">
        <img className="myImage" src="./img/Game-2/br.png" />
      </div>
      <div id="s9">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s10">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s11">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s12">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s13">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s14">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s15">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s16">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="s17"></div>
      <div id="s18"></div>
      <div id="s19"></div>
      <div id="s20"></div>
      <div id="s21"></div>
      <div id="s22"></div>
      <div id="s23"></div>
      <div id="s24"></div>
      <div id="s25"></div>
      <div id="s26"></div>
      <div id="s27"></div>
      <div id="s28"></div>
      <div id="s29"></div>
      <div id="s30"></div>
      <div id="s31"></div>
      <div id="s32"></div>
      <div id="s33"></div>
      <div id="s34"></div>
      <div id="s35"></div>
      <div id="s36"></div>
      <div id="s37"></div>
      <div id="s38"></div>
      <div id="s39"></div>
      <div id="s40"></div>
      <div id="s41"></div>
      <div id="s42"></div>
      <div id="s43"></div>
      <div id="s44"></div>
      <div id="s45"></div>
      <div id="s46"></div>
      <div id="s47"></div>
      <div id="s48"></div>
      <div id="s49">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s50">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s51">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s52">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s53">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s54">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s55">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s56">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="s57">
        <img className="myImage" src="./img/Game-2/wr.png" />
      </div>
      <div id="s58">
        <img className="myImage" src="./img/Game-2/wn.png" />
      </div>
      <div id="s59">
        <img className="myImage" src="./img/Game-2/wb.png" />
      </div>
      <div id="s60">
        <img className="myImage" src="./img/Game-2/wq.png" />
      </div>
      <div id="s61">
        <img className="myImage" src="./img/Game-2/wk.png" />
      </div>
      <div id="s62">
        <img className="myImage" src="./img/Game-2/wb.png" />
      </div>
      <div id="s63">
        <img className="myImage" src="./img/Game-2/wn.png" />
      </div>
      <div id="s64">
        <img className="myImage" src="./img/Game-2/wr.png" />
      </div>
    </div>
  );
}
