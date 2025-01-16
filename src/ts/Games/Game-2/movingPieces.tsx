import { useEffect } from "react";
import { useSkalowanieBoardu } from "./useSkalowanieBoardu";

export function MovingPieces() {

  // TODO tutaj odbieram aktualną wielkość piona
  const lol = useSkalowanieBoardu();
  // TODO

  useEffect(() => {
    const square = document.querySelectorAll(".chess-grid > div");
    if (!square) {
      return;
    }

    function MovingPicesHandler(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (target.className == "myImage") {
        // usówanie oobrazka z diva
        const parent = target.parentElement;
        if (parent) parent.innerHTML = "";
        //koniec usówania obrazka z diva

        // zapisuje obrazek
        const img = target.getAttribute("src");
        //koniec zapisywania obrazka

        const temp = document.createElement("img");
        if (img) {
          temp.src = img;
        }
        temp.style.position = "absolute";

        window.addEventListener("mousemove", (event) => {
          temp.style.left = event.clientX + "px";
          temp.style.top = event.clientY + "px";
        });

        const chwytak = document.querySelector(".chess-grid");
        chwytak?.appendChild(temp);
      }
    }

    // TODO dodać upuszczanie pionka
    // TODO pobrać wielkośc kratki na podstawie skalowania

    for (let n of square) {
      n.addEventListener("mousedown", MovingPicesHandler as EventListener);
    }

    return () => {
      for (let n of square) {
        n.removeEventListener("mousedown", MovingPicesHandler as EventListener);
      }
    };
  });
}