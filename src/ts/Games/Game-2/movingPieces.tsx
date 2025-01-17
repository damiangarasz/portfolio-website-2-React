import { useEffect } from "react";

export function MovingPieces() {
  useEffect(() => {
    const square = document.querySelectorAll(".chess-grid > div");
    if (!square) {
      return;
    }

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

        window.addEventListener("mousemove", (event) => {
          temp.style.left = event.clientX + "px";
          temp.style.top = event.clientY + "px";
        });

        const chwytak = document.querySelector(".chess-grid");
        chwytak?.appendChild(temp);
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
      console.log(query);
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

      console.log(event.target);
    }

    for (let n of square) {
      n.addEventListener("mouseup", DropPicesHandler as EventListener);
    }

    //TODO ogarnąć wyjeżdżanie poza plansze

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
