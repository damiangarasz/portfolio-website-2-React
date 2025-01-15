import { useEffect } from "react";
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

  MovingPieces();

  return (
    <div className="chess-grid mx-auto h-[250px] w-[250px]">
      <div id="1">
        <img className="myImage" src="./img/Game-2/bb.png" />
      </div>
      <div id="2">
        <img className="myImage" src="./img/Game-2/bb.png" />
      </div>
      <div id="3"></div>
      <div id="4"></div>
      <div id="5"></div>
      <div id="6"></div>
      <div id="7"></div>
      <div id="8"></div>
      <div id="9"></div>
      <div id="10"></div>
      <div id="11"></div>
      <div id="12"></div>
      <div id="13"></div>
      <div id="14"></div>
      <div id="15"></div>
      <div id="16"></div>
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
      <div id="49"></div>
      <div id="50"></div>
      <div id="51"></div>
      <div id="52"></div>
      <div id="53"></div>
      <div id="54"></div>
      <div id="55"></div>
      <div id="56"></div>
      <div id="57"></div>
      <div id="58"></div>
      <div id="59"></div>
      <div id="60"></div>
      <div id="61"></div>
      <div id="62"></div>
      <div id="63"></div>
      <div id="64"></div>
      <div id="65"></div>
    </div>
  );
}
