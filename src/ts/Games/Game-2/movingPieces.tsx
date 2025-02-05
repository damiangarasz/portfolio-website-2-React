import { useEffect, useRef, useState } from "react";
import { engine } from "./engine";

export function MovingPieces() {
  const target = useRef<HTMLElement | null>(null);
  const parent = useRef<HTMLElement | null>(null);
  const changedPos = useRef(false);
  const [fillArr, setFillArr] = useState(false);
  const [dubble, setDubble] = useState(0);

  interface data {
    pieceId: string;
    startBoardId: number;
    targetBoardId: number;
    occupatedSquares: number[];
    collision: boolean;
    kingCollisions: {
      pieces: Record<string, string>[];
    };
  }

  const data: data = {
    pieceId: "",
    startBoardId: 0,
    targetBoardId: 0,
    occupatedSquares: [],
    collision: false,
    kingCollisions: {
      pieces: [],
    },
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

  //TODO zapchnąc w jakie pola każda figura villaina strzela

  useEffect(() => {
    //pchanie pozycji i nazwy każdej figury
    //TODO zrobione na twardo tylko dla czarnych
    const occupatedSqueres: Record<string, string>[] = [];

    const figures: Record<string, string>[] = [];
    for (let n = 1; n <= 64; n++) {
      const temp = document.querySelector(`#s${n}`);
      if (temp?.children[0]) {
        const src = temp.children[0].getAttribute("src");
        let pieceId;
        if (src) pieceId = src.match(/(\w{2})\.png$/);

        const obj: Record<string, string> = {};
        if (pieceId) obj[n.toString()] = pieceId[1];
        if (pieceId) occupatedSqueres.push(obj);
      }
    }
    occupatedSqueres.map((n) => {
      if (Object.values(n)[0].slice(0, 1) == "b") {
        figures.push(n);
      }
    });
    data.kingCollisions.pieces = figures;
  });

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
      //TODO bicie w przeplocie
      //TODO zamiana piona na figure
      //TODO szach i mat
      //TODO kolejność ruchu
      //TODO refresh nie resetuje planszy

      const returnData = engine(data);

      function legal() {
        if (target.tagName == "DIV") {
          //kiedy wchodzimy na puste pole
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
          //kiedy bijemy
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

      function wPrzeplocie() {
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

        const targetId = `#s${dubble}`;
        const childrenId = document.querySelector(`${targetId} > img`);
        const square = document.querySelector(targetId);
        if (childrenId) square?.removeChild(childrenId);
      }

      function illegal() {
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

      if (returnData.isLegal) {
        if (target.tagName == "DIV") {
          if (data.pieceId == "wp" || data.pieceId == "bp") {
            const targetId = Number(target.id.slice(1));
            const top = [25, 26, 27, 28, 29, 30, 31, 32];
            const bottom = [33, 34, 35, 36, 37, 38, 39, 40];
            if (
              Math.abs(data.startBoardId - targetId) == 8 ||
              Math.abs(targetId - data.startBoardId) == 8
            ) {
              //pion idzie do przodu na puste pole
              setDubble(0);
              legal();
            } else if (
              Math.abs(data.startBoardId - targetId) == 16 ||
              Math.abs(targetId - data.startBoardId) == 16
            ) {
              setDubble(targetId);
              legal();
            } else if (
              data.startBoardId - 1 == dubble &&
              top.includes(data.startBoardId)
            ) {
              //pion bije w przeplocie
              wPrzeplocie();
            } else if (
              data.startBoardId + 1 == dubble &&
              top.includes(data.startBoardId)
            ) {
              //pion bije w przeplocie
              wPrzeplocie();
            } else if (
              data.startBoardId - 1 == dubble &&
              bottom.includes(data.startBoardId)
            ) {
              //pion bije w przeplocie
              wPrzeplocie();
            } else if (
              data.startBoardId + 1 == dubble &&
              bottom.includes(data.startBoardId)
            ) {
              //pion bije w przeplocie
              wPrzeplocie();
            } else {
              //pion chce zagrać po skosie na puste pole
              illegal();
            }
          } else {
            setDubble(0);
            //każda inna figura zagrywa na puste pole już po sprawdzeniu czy legal
            legal();
          }
        } else {
          //tutaj figura trafia na inną figurę
          let srcTag = data.pieceId;
          const ogTag = srcTag;
          let targetTag;

          //sprawdzanie dokąłdnie jakie figury są zaangażowane
          const targetSq = target.getAttribute("src");
          let pieceId;
          if (targetSq) {
            pieceId = targetSq.match(/(\w{2})\.png$/);
          }
          if (pieceId) targetTag = pieceId[1];
          targetTag = targetTag?.slice(0, 1);
          srcTag = srcTag.slice(0, 1);

          if (srcTag == targetTag) {
            //figury tego samego koloru trafiają na siebie illegal
            illegal();
          } else if (srcTag != targetTag && ogTag != "wp" && ogTag != "bp") {
            //figury różnego koloru trafiają na siebie i hero to nie jest pionek
            setDubble(0);
            legal();
          } else if (ogTag == "wp" || ogTag == "bp") {
            //figury różnego koloru i hero to jest pionek
            if (!target.parentElement) return;
            const targetId = Number(target.parentElement.id.slice(1));

            if (
              Math.abs(data.startBoardId - targetId) == 8 ||
              Math.abs(data.startBoardId - targetId) == 16 ||
              Math.abs(targetId - data.startBoardId) == 16 ||
              Math.abs(targetId - data.startBoardId) == 8
            ) {
              //pionek pórbuje bić na wprost illegal
              illegal();
            } else {
              //pionek bije prawidłowo na skos
              setDubble(0);
              legal();
            }
          }
        }
      } else {
        //normalny nielegalny ruch figury
        illegal();
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
