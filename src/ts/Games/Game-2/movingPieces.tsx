import { useEffect } from "react";

export function MovingPieces() {
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
        //koniec usówania obrazka z diva

        // zapisuje obrazek
        const img = target.getAttribute("src");
        const image = new Image();
        if (img) {
          image.src = img;
        }
        //koniec zapisywania obrazka
      }
    }

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
