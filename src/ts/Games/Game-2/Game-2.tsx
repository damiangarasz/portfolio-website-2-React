import { useEffect, useState } from "react";
import { MovingPieces } from "./movingPieces";

export function Game2() {
  useEffect(() => {
    const img = document.querySelectorAll(".myImage");
    function preventDefaultDrag(event: DragEvent) {
      event.preventDefault();
    }
    for (let n of img) {
      n.addEventListener("dragstart", preventDefaultDrag as EventListener);
    }

    return () => {
      for (let n of img) {
        n.removeEventListener("dragstart", preventDefaultDrag as EventListener);
      }
    };
  });

  const [rozmiarOkna, setRozmiarOkna] = useState({
    width: window.innerWidth * 0.6 + "px",
    height: window.innerWidth * 0.6 + "px",
  });

  useEffect(() => {
    function resize() {
      const temp = window.innerWidth * 0.6;
      const rozmiar = {
        width: temp + "px",
        height: temp + "px",
      };
      setRozmiarOkna(rozmiar);
      console.log("halo");
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  MovingPieces();

  return (
    <div className="chess-grid mx-auto" style={rozmiarOkna}>
      <div id="1">
        <img className="myImage" src="./img/Game-2/br.png" />
      </div>
      <div id="2">
        <img className="myImage" src="./img/Game-2/bn.png" />
      </div>
      <div id="3">
        <img className="myImage" src="./img/Game-2/bb.png" />
      </div>
      <div id="4">
        <img className="myImage" src="./img/Game-2/bq.png" />
      </div>
      <div id="5">
        <img className="myImage" src="./img/Game-2/bk.png" />
      </div>
      <div id="6">
        <img className="myImage" src="./img/Game-2/bb.png" />
      </div>
      <div id="7">
        <img className="myImage" src="./img/Game-2/bn.png" />
      </div>
      <div id="8">
        <img className="myImage" src="./img/Game-2/br.png" />
      </div>
      <div id="9">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="10">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="11">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="12">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="13">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="14">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="15">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="16">
        <img className="myImage" src="./img/Game-2/bp.png" />
      </div>
      <div id="17"></div>
      <div id="18"></div>
      <div id="19"></div>
      <div id="20"></div>
      <div id="21"></div>
      <div id="22"></div>
      <div id="23"></div>
      <div id="24"></div>
      <div id="25"></div>
      <div id="26"></div>
      <div id="27"></div>
      <div id="28"></div>
      <div id="29"></div>
      <div id="30"></div>
      <div id="31"></div>
      <div id="32"></div>
      <div id="33"></div>
      <div id="34"></div>
      <div id="35"></div>
      <div id="36"></div>
      <div id="37"></div>
      <div id="38"></div>
      <div id="39"></div>
      <div id="40"></div>
      <div id="41"></div>
      <div id="42"></div>
      <div id="43"></div>
      <div id="44"></div>
      <div id="45"></div>
      <div id="46"></div>
      <div id="47"></div>
      <div id="48"></div>
      <div id="49">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="50">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="51">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="52">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="53">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="54">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="55">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="56">
        <img className="myImage" src="./img/Game-2/wp.png" />
      </div>
      <div id="57">
        <img className="myImage" src="./img/Game-2/wr.png" />
      </div>
      <div id="58">
        <img className="myImage" src="./img/Game-2/wn.png" />
      </div>
      <div id="59">
        <img className="myImage" src="./img/Game-2/wb.png" />
      </div>
      <div id="60">
        <img className="myImage" src="./img/Game-2/wq.png" />
      </div>
      <div id="61">
        <img className="myImage" src="./img/Game-2/wk.png" />
      </div>
      <div id="62">
        <img className="myImage" src="./img/Game-2/wb.png" />
      </div>
      <div id="63">
        <img className="myImage" src="./img/Game-2/wn.png" />
      </div>
      <div id="64">
        <img className="myImage" src="./img/Game-2/wr.png" />
      </div>
    </div>
  );
}
