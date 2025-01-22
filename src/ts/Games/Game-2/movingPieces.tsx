import { useEffect, useRef } from "react";
import { engine } from "./engine";

export function MovingPieces() {
  const target = useRef<HTMLElement | null>(null);
  const parent = useRef<HTMLElement | null>(null);
  const changedPos = useRef(false);

  const data = {
    pieceId: "",
    startBoardId: 0,
    targetBoardId: 0,
  };

  useEffect(() => {
    const square = document.querySelectorAll(".chess-grid > div");
    if (!square) {
      return;
    }

    function MovingPicesHandler(event: MouseEvent) {
      event.preventDefault();
      changedPos.current == false;

      // const target = useRef(event.target as HTMLElement);
      target.current = event.target as HTMLElement;
      const squareWidth = (window.innerWidth * 0.6) / 8;
      const sqAdj = squareWidth / 2;

      if (target.current == null) return;
      parent.current = target.current.parentElement;

      if (target.current.className == "myImage") {
        //dodaje do obiektu data info o początkowym id elementu
        const id = parent.current?.getAttribute("id");
        if (id) {
          const temp = id.slice(1);
          data.startBoardId = Number(temp);
        }

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
        temp.style.left = event.clientX - sqAdj + "px";
        temp.style.top = event.clientY - sqAdj + "px";
        temp.className = "temp";

        const div = document.getElementsByClassName(
          "chess-grid",
        ) as HTMLCollectionOf<HTMLDivElement>;

        //wyznaczam granice szachownicy do anulowania przeciąganego elementu
        const top = div[0].offsetTop;
        const left = div[0].offsetLeft;
        const tableWidth = window.innerWidth * 0.6;

        const piceMove = function (event: MouseEvent) {
          temp.style.left = event.clientX - sqAdj + "px";
          temp.style.top = event.clientY - sqAdj + "px";
        };

        window.addEventListener("mousemove", piceMove);

        // wstawiam nowy element tymczasowy podczas przeciągania
        const chwytak = document.querySelector(".chess-grid");
        chwytak?.appendChild(temp);

        const mouseMove = function (event: MouseEvent) {
          if (
            (event.clientX < left ||
              event.clientX > left + tableWidth ||
              event.clientY < top ||
              event.clientY > top + tableWidth) &&
            changedPos.current == false
          ) {
            console.log("lol");
            const tempEl = document.querySelector(".temp");
            const id = parent.current?.getAttribute("id");
            const chwytakSq = document.getElementById("" + id);
            if (target.current == null) return;
            const src = target.current.getAttribute("src");
            const el = document.createElement("img");
            el.className = "myImage";
            if (src) {
              el.src = src;
            }
            const check = document.querySelector(`#${id} > img`);
            if (check) {
              return;
            } else {
              chwytakSq?.appendChild(el);
            }
            if (tempEl) chwytak?.removeChild(tempEl);
          }
        };

        window.addEventListener("mousemove", mouseMove);
      }

      //wyciąganie id trzymanego piona
      const piece = document.querySelector(".temp");
      const pieceSrc = piece?.getAttribute("src");
      let pieceId;
      if (pieceSrc) {
        pieceId = pieceSrc.match(/(\w{2})\.png$/);
      }
      let letters;
      if (pieceId) letters = pieceId[1];
      if (letters) data.pieceId = letters;
      //koniec wyciągania id trzymanego piona
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

      //dodawanie do data targetowanego id
      if (div) {
        const temp = div.slice(1);
        data.targetBoardId = Number(temp);
      }

      //TODO komunikacja z engine
      const lol = engine(data);

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

      //TODO jestem tutaj 
      console.log(target);
      // changedPos.current = true;
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
