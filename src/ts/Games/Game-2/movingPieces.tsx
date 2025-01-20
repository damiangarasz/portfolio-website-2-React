import { MouseEventHandler, useEffect } from "react";

export function MovingPieces() {
  useEffect(() => {
    const square = document.querySelectorAll(".chess-grid > div");
    if (!square) {
      return;
    }

    let mouseMove: (event: MouseEvent) => void;
    let piceMove: (event: MouseEvent) => void;

    function MovingPicesHandler(event: MouseEvent) {
      event.preventDefault();

      const target = event.target as HTMLElement;
      const squareWidth = (window.innerWidth * 0.6) / 8;
      if (target.className == "myImage") {
        // usuwanie oobrazka z diva
        const parent = target.parentElement;
        if (parent) parent.innerHTML = "";
        //koniec usuwania obrazka z diva

        // zapisuje obrazek
        const img = target.getAttribute("src");
        //koniec zapisywania obrazka

        //TODO opisać co się dzieje poniżej

        const temp = document.createElement("img");
        if (img) {
          temp.src = img;
        }
        temp.style.position = "absolute";
        temp.style.width = squareWidth + "px";
        temp.style.pointerEvents = "none";
        temp.className = "temp";

        const div = document.getElementsByClassName(
          "chess-grid",
        ) as HTMLCollectionOf<HTMLDivElement>;

        const top = div[0].offsetTop;
        const left = div[0].offsetLeft;
        const tableWidth = window.innerWidth * 0.6;

        piceMove = function (event: MouseEvent) {
          temp.style.left = event.clientX + "px";
          temp.style.top = event.clientY + "px";
        };

        window.addEventListener("mousemove", mouseMove);

        const chwytak = document.querySelector(".chess-grid");
        chwytak?.appendChild(temp);

        mouseMove = function (event: MouseEvent) {
          if (
            event.clientX < left ||
            event.clientX > left + tableWidth ||
            event.clientY < top ||
            event.clientY > top + tableWidth
          ) {

            const tempPice = document.querySelector(".temp");
          }
        };
      }
    }

    for (let n of square) {
      n.addEventListener("mousedown", MovingPicesHandler as EventListener);
    }

    function DropPicesHandler(event: MouseEvent) {
      const temp = document.querySelector(".temp");
      const chwytak = document.querySelector(".chess-grid");

      const target = event.target as HTMLElement;
      const div = target.getAttribute("id");
      const img = temp?.getAttribute("src");
      const query = "" + div;
      const insertDiv = document.getElementById(query);

      const imgEl = document.createElement("img");
      imgEl.className = "myImage";
      if (img) {
        imgEl.src = img;
      }

      insertDiv?.appendChild(imgEl);

      if (temp) {
        chwytak?.removeChild(temp);
      }

      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousemove", piceMove);
    }

    for (let n of square) {
      n.addEventListener("mouseup", DropPicesHandler as EventListener);
    }

    return () => {
      for (let n of square) {
        n.removeEventListener("mousedown", MovingPicesHandler as EventListener);
      }
      for (let n of square) {
        n.removeEventListener("mousedown", DropPicesHandler as EventListener);
      }
    };
  });
}
