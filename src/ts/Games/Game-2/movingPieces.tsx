import { useEffect, useRef, useState } from "react";
import { engine } from "./engine";

export function MovingPieces() {
  const target = useRef<HTMLElement | null>(null);
  const parent = useRef<HTMLElement | null>(null);
  const changedPos = useRef(false);
  const [fillArr, setFillArr] = useState(false);

  interface data {
    pieceId: string;
    startBoardId: number;
    targetBoardId: number;
    occupatedSquares: number[];
  }

  const data: data = {
    pieceId: "",
    startBoardId: 0,
    targetBoardId: 0,
    occupatedSquares: [],
  };

  useEffect(() => {
    //pchanie zajętych kwadratów
    const imgSquare = document.querySelectorAll(".myImage");
    for (let n of imgSquare) {
      const parent = n.parentElement;
      const id = Number(parent?.id.slice(1));
      data.occupatedSquares.push(id);
    }
  }, [fillArr]);

  useEffect(() => {
    const square = document.querySelectorAll(".chess-grid > div");
    if (!square) {
      return;
    }

    function MovingPicesHandler(event: MouseEvent) {
      event.preventDefault();
      changedPos.current = false;

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

    for (let n of square) {
      n.addEventListener("mousedown", MovingPicesHandler as EventListener);
    }

    function DropPicesHandler(event: MouseEvent) {
      const temp = document.querySelector(".temp");
      if (!temp) return;
      const chwytak = document.querySelector(".chess-grid");

      const target = event.target as HTMLElement;
      const div = target.getAttribute("id");
      const parentDiv = target.parentElement;
      const parentDivId = parentDiv?.getAttribute("id");

      //dodawanie do data targetowanego id
      if (div) {
        const temp = div.slice(1);
        data.targetBoardId = Number(temp);
      } else if (parentDivId) {
        const temp = parentDivId.slice(1);
        data.targetBoardId = Number(temp);
      }

      //~~~~~~~~~KOMUMIKACJA Z ENGINE LOL~~~~~~~~~~

      const returnData = engine(data);

      function legal() {
        //TODO
      }

      function illegal() {}

      if (returnData.isLegal) {
        //TODO

        if (target.tagName == "DIV") {
          if (data.pieceId == "wp" || data.pieceId == "bp") {
            const targetId = Number(target.id.slice(1));

            if (
              Math.abs(data.startBoardId - targetId) == 8 ||
              Math.abs(data.startBoardId - targetId) == 16 ||
              Math.abs(targetId - data.startBoardId) == 16 ||
              Math.abs(targetId - data.startBoardId) == 8
            ) {
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
            } else {
              const piece = document.querySelector(".temp");
              const pieceSrc = piece?.getAttribute("src");
              const el = document.createElement("img");
              if (!pieceSrc) return;
              el.setAttribute("src", pieceSrc);
              el.className = "myImage";

              const startId = "#s" + data.startBoardId;
              const target = document.querySelector(startId);
              target?.appendChild(el);

              const parent = document.querySelector(".chess-grid");
              if (!piece) return;
              parent?.removeChild(piece);
            }
          } else {
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
        } else {
          let srcTag = data.pieceId;
          const ogTag = srcTag;
          let targetTag;

          const targetSq = target.getAttribute("src");
          let pieceId;
          if (targetSq) {
            pieceId = targetSq.match(/(\w{2})\.png$/);
          }
          if (pieceId) targetTag = pieceId[1];
          targetTag = targetTag?.slice(0, 1);
          srcTag = srcTag.slice(0, 1);

          if (srcTag == targetTag) {
            const piece = document.querySelector(".temp");
            const pieceSrc = piece?.getAttribute("src");
            const el = document.createElement("img");
            if (!pieceSrc) return;
            el.setAttribute("src", pieceSrc);
            el.className = "myImage";

            const startId = "#s" + data.startBoardId;
            const target = document.querySelector(startId);
            target?.appendChild(el);

            const parent = document.querySelector(".chess-grid");
            if (!piece) return;
            parent?.removeChild(piece);
          } else if (srcTag != targetTag && ogTag != "wp" && ogTag != "bp") {
            const piece = document.querySelector(".temp");
            const pieceSrc = piece?.getAttribute("src");
            const el = document.createElement("img");
            if (!pieceSrc) return;
            el.setAttribute("src", pieceSrc);
            el.className = "myImage";

            const targetId = target.parentElement?.getAttribute("id");
            const targetImg = document.querySelector(`#${targetId} > img`);

            const square = document.querySelector(`#${targetId}`);
            if (targetImg) square?.removeChild(targetImg);
            square?.appendChild(el);
            const board = document.querySelector(".chess-grid");
            if (piece) board?.removeChild(piece);
          } else if (ogTag == "wp" || ogTag == "bp") {

            if (!target.parentElement) return;
            const targetId = Number(target.parentElement.id.slice(1));

            if (
              Math.abs(data.startBoardId - targetId) == 8 ||
              Math.abs(data.startBoardId - targetId) == 16 ||
              Math.abs(targetId - data.startBoardId) == 16 ||
              Math.abs(targetId - data.startBoardId) == 8
            ) {
              const piece = document.querySelector(".temp");
              const pieceSrc = piece?.getAttribute("src");
              const el = document.createElement("img");
              if (!pieceSrc) return;
              el.setAttribute("src", pieceSrc);
              el.className = "myImage";

              const startId = "#s" + data.startBoardId;
              const target = document.querySelector(startId);
              target?.appendChild(el);

              const parent = document.querySelector(".chess-grid");
              if (!piece) return;
              parent?.removeChild(piece);
            } else {
              const piece = document.querySelector(".temp");
              const pieceSrc = piece?.getAttribute("src");
              const el = document.createElement("img");
              if (!pieceSrc) return;
              el.setAttribute("src", pieceSrc);
              el.className = "myImage";

              const targetId = target.parentElement?.getAttribute("id");
              const targetImg = document.querySelector(`#${targetId} > img`);

              const square = document.querySelector(`#${targetId}`);
              if (targetImg) square?.removeChild(targetImg);
              square?.appendChild(el);
              const board = document.querySelector(".chess-grid");
              if (piece) board?.removeChild(piece);
            }
          }
        }
      } else {
        const piece = document.querySelector(".temp");
        const pieceSrc = piece?.getAttribute("src");
        const el = document.createElement("img");
        if (!pieceSrc) return;
        el.setAttribute("src", pieceSrc);
        el.className = "myImage";

        const startId = "#s" + data.startBoardId;
        const target = document.querySelector(startId);
        target?.appendChild(el);

        const parent = document.querySelector(".chess-grid");
        if (!piece) return;
        parent?.removeChild(piece);
      }

      changedPos.current = true;
      data.occupatedSquares = [];
      setFillArr(fillArr ? false : true);
    }

    for (let n of square) {
      n.addEventListener("mouseup", DropPicesHandler as EventListener);
    }

    return () => {
      for (let n of square) {
        n.removeEventListener("mousedown", MovingPicesHandler as EventListener);
      }
      for (let n of square) {
        n.removeEventListener("mouseup", DropPicesHandler as EventListener);
      }
    };
  });
}
