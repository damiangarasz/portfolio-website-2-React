import { MouseEventHandler, useEffect, useRef } from "react";

export function MovingPieces() {
  const target = useRef<HTMLElement | null>(null);
  const parent = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const square = document.querySelectorAll(".chess-grid > div");
    if (!square) {
      return;
    }

    function MovingPicesHandler(event: MouseEvent) {
      event.preventDefault();

      // const target = useRef(event.target as HTMLElement);
      target.current = event.target as HTMLElement;
      const squareWidth = (window.innerWidth * 0.6) / 8;

      if (target.current == null) return;
      parent.current = target.current.parentElement;

      if (target.current.className == "myImage") {
        // usuwanie oobrazka z diva

        if (parent.current) parent.current.innerHTML = "";
        //koniec usuwania obrazka z diva

        // zapisuje obrazek
        const img = target.current.getAttribute("src");
        //koniec zapisywania obrazka

        //Tworze elmenent do przeciągania
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

        //wyznaczam granice szachownicy do anulowania przeciąganego elementu
        const top = div[0].offsetTop;
        const left = div[0].offsetLeft;
        const tableWidth = window.innerWidth * 0.6;

        const piceMove = function (event: MouseEvent) {
          temp.style.left = event.clientX + "px";
          temp.style.top = event.clientY + "px";
        };

        window.addEventListener("mousemove", piceMove);

        const chwytak = document.querySelector(".chess-grid");
        chwytak?.appendChild(temp);

        const mouseMove = function (event: MouseEvent) {
          if (
            event.clientX < left ||
            event.clientX > left + tableWidth ||
            event.clientY < top ||
            event.clientY > top + tableWidth
          ) {
            // console.log(parent.current);
            const id = parent.current?.getAttribute("id");
            const chwytak = document.getElementById(id + "");
            if (target.current == null) return;
            const src = target.current.getAttribute("src");
            console.log(chwytak);
          }
        };
        console.log(target);

        window.addEventListener("mousemove", mouseMove);
      }
    }

    //TODO po pierwszym princie nie działa usuwanie przeciąganego piona po wyjeździe za plansze

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
