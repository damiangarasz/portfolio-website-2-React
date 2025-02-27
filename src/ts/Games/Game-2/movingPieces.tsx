import { useEffect, useRef, useState } from "react";
import { engine } from "./engine";

export function MovingPieces() {
  const target = useRef<HTMLElement | null>(null);
  const parent = useRef<HTMLElement | null>(null);
  const changedPos = useRef(false);
  const [fillArr, setFillArr] = useState(false);
  const [dubble, setDubble] = useState(0);
  const [stan, setStan] = useState<number[]>([]);
  const [posArr, setPosArr] = useState(() => {
    const lol: Array<{ [key: string]: string }> = [
      { 1: "br" },
      { 2: "bn" },
      { 3: "bb" },
      { 4: "bq" },
      { 5: "bk" },
      { 6: "bb" },
      { 7: "bn" },
      { 8: "br" },
      { 9: "bp" },
      { 10: "bp" },
      { 11: "bp" },
      { 12: "bp" },
      { 13: "bp" },
      { 14: "bp" },
      { 15: "bp" },
      { 16: "bp" },
      { 17: "" },
      { 18: "" },
      { 19: "" },
      { 20: "" },
      { 21: "" },
      { 22: "" },
      { 23: "" },
      { 24: "" },
      { 25: "" },
      { 26: "" },
      { 27: "" },
      { 28: "" },
      { 29: "" },
      { 30: "" },
      { 31: "" },
      { 32: "" },
      { 33: "" },
      { 34: "" },
      { 35: "" },
      { 36: "" },
      { 37: "" },
      { 38: "" },
      { 39: "" },
      { 40: "" },
      { 41: "" },
      { 42: "" },
      { 43: "" },
      { 44: "" },
      { 45: "" },
      { 46: "" },
      { 47: "" },
      { 48: "" },
      { 49: "wp" },
      { 50: "wp" },
      { 51: "wp" },
      { 52: "wp" },
      { 53: "wp" },
      { 54: "wp" },
      { 55: "wp" },
      { 56: "wp" },
      { 57: "wr" },
      { 58: "wn" },
      { 59: "wb" },
      { 60: "wq" },
      { 61: "wk" },
      { 62: "wb" },
      { 63: "wn" },
      { 64: "wr" },
    ];
    return lol;
  });

  //TODO może potrzeba wyczyścić cache?

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    sessionStorage.setItem("value", JSON.stringify(posArr));
  }, [posArr]);
  // hook dla pola przemiany
  const przemianaClick = useRef((e: Event) => {});

  interface data {
    pieceId: string;
    startBoardId: number;
    startBoardDivId: string;
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
    startBoardDivId: "",
    targetBoardId: 0,
    occupatedSquares: [],
    collision: false,
    kingCollisions: {
      pieces: [],
    },
  };

  useEffect(() => {
    const cacheJSON = sessionStorage.getItem("value");
    let cache;
    if (cacheJSON) cache = JSON.parse(cacheJSON);

    if (cache) {
      // cache.map((n: { [key: string]: string }) => {
      //   const key = Object.keys(n);
      //   const value = Object.values(n)[0];
      //   const square = document.querySelector(`#s${key[0]}`);
      //   const squareChildren = square?.children[0];
      //   const attribute = squareChildren?.getAttribute("src");
      //   let idArr;
      //   if (attribute) idArr = attribute.match(/(\w{2})\.png$/);
      //   const id = idArr && idArr[1] ? idArr[1] : "";
      //   if (value != id) {
      //     if (value == "") {
      //       const children = document.querySelector(`#s${key[0]} > img`);
      //       if (children) square?.removeChild(children);
      //     } else {
      //       squareChildren?.setAttribute("src", `./img/Game-2/${value}.png`);
      //     }
      //   }
      // });

      cache.map((cacheArr: { [key: string]: string }) => {
        const number = Number(Object.keys(cacheArr));

        const cell = document.querySelector(`#s${number}`);
        if (cell && cell.children[0].tagName == "IMG") {
          const img = document.querySelector(`#s${number} .myImage`);
          const src = img?.getAttribute("src");
          const id = src!.match(/(\w{2})\.png$/);
          console.log(id);
        }

        //TODO tutaj ===============================

        if (cell) console.log(cell.children[0]);
      });
    }

    console.log(cache);
    //TODO tutaj jestem lol
  }, [posArr]);

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
      const boardX = document.querySelector(".chess-grid") as HTMLElement;
      function right(e: MouseEvent) {
        e.preventDefault();
      }
      boardX.addEventListener("contextmenu", right);
      if (event.button !== 0) {
        return;
      }
      event.preventDefault();
      changedPos.current = false;

      target.current = event.target as HTMLElement;
      const squareWidth = (window.innerWidth * 0.6) / 8;
      const sqAdj = squareWidth / 2;

      if (target.current == null) return;
      parent.current = target.current.parentElement;

      if (target.current.className == "myImage") {
        //dodaje do obiektu data info o początkowym id elementu
        const id = parent.current?.getAttribute("id");
        if (id) data.startBoardDivId = id;
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
            data.startBoardDivId = "";
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
            const check = document.querySelector(`#${id} > .myImage`);
            if (check) {
              return;
            } else {
              chwytakSq?.appendChild(el);
            }
            if (tempEl) chwytak?.removeChild(tempEl);

            //usuwanie tymczasowego podświetlenia możliwości ruchu
            for (let n = 1; n <= 64; n++) {
              const sqIMGdot = document.querySelector(`#s${n} > .dot`);
              const parent = document.querySelector(`#s${n}`);
              //usuwanie wszystkich inline style
              parent?.removeAttribute("style");
              if (sqIMGdot) {
                parent?.removeChild(sqIMGdot);
              }
            }
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

      // dodawanie kropek
      const engineData = engine(data);

      if (data.pieceId == "wp" || data.pieceId == "bp") {
        const idArr = engineData.legalSquares;

        idArr.map((n) => {
          const parent = document.querySelector(`#s${n}`) as HTMLElement | null;

          function dot() {
            const el = document.createElement("img");
            el.setAttribute("src", "./img/Game-2/dot.png");
            el.setAttribute("class", "dot");
            el.style.pointerEvents = "none";
            el.style.position = "absolute";
            parent?.appendChild(el);
          }
          const top = [25, 26, 27, 28, 29, 30, 31, 32];
          const bottom = [33, 34, 35, 36, 37, 38, 39, 40];

          if (data.startBoardId + 16 == n || data.startBoardId - 16 == n) {
            //pione idze do przodu, sprawdzam czy trafia na img czy kratka jest pusta

            if (data.startBoardId < 32) {
              const pastParentChildren = document.querySelector(
                `#s${n - 8} > img`,
              ) as HTMLElement | null;
              const pastParentChildrenClass =
                pastParentChildren?.getAttribute("class");
              if (pastParentChildrenClass != "myImage") dot();
            } else {
              const pastParentChildren = document.querySelector(
                `#s${n + 8} > img`,
              ) as HTMLElement | null;
              const pastParentChildrenClass =
                pastParentChildren?.getAttribute("class");
              if (pastParentChildrenClass != "myImage") dot();
            }
          } else if (data.startBoardId - 8 == n || data.startBoardId + 8 == n) {
            if (parent?.children[0]?.getAttribute("class") != "myImage") dot();
          } else {
            //pion idzie po skosie sprawdzam czy krakta jest pusta czy trafia na img
            const parent = document.querySelector(`#s${n}`);
            let src;
            if (parent?.children[0])
              src = parent?.children[0].getAttribute("src");
            let pieceId;
            if (src) pieceId = src.match(/(\w{1}).\.png$/); //maczuje w or b

            if (
              pieceId &&
              parent?.children[0] instanceof HTMLElement &&
              pieceId[1] != data.pieceId.slice(0, 1)
            ) {
              //przechodzi jeżeli w vs b || b vs w
              if (parent instanceof HTMLElement)
                parent.style.backgroundColor = "rgba(255, 255, 51, 0.5)";
            } else if (
              data.startBoardId - 1 == dubble &&
              top.includes(data.startBoardId) &&
              n == data.startBoardId - 9
            ) {
              const parent: HTMLElement | null = document.querySelector(
                `#s${n}`,
              );
              if (parent) {
                dot();
              }
            } else if (
              data.startBoardId + 1 == dubble &&
              top.includes(data.startBoardId) &&
              n == data.startBoardId - 7
            ) {
              const parent: HTMLElement | null = document.querySelector(
                `#s${n}`,
              );
              if (parent) {
                dot();
              }
            } else if (
              data.startBoardId - 1 == dubble &&
              bottom.includes(data.startBoardId) &&
              n == data.startBoardId + 7
            ) {
              const parent: HTMLElement | null = document.querySelector(
                `#s${n}`,
              );
              if (parent) {
                dot();
              }
            } else if (
              data.startBoardId + 1 == dubble &&
              bottom.includes(data.startBoardId) &&
              n == data.startBoardId + 9
            ) {
              const parent: HTMLElement | null = document.querySelector(
                `#s${n}`,
              );
              if (parent) {
                dot();
              }
            }
          }
        });
      } else {
        const idArr = engineData.legalSquares;
        idArr.map((n) => {
          const sq: HTMLElement | null = document.querySelector(`#s${n}`);

          const parent = document.querySelector(`#s${n}`);
          let src;
          if (parent?.children[0])
            src = parent?.children[0].getAttribute("src");
          let pieceId;
          if (src) pieceId = src.match(/(\w{1}).\.png$/);

          if (sq?.children[0] == undefined) {
            const el = document.createElement("img");
            el.setAttribute("src", "./img/Game-2/dot.png");
            el.setAttribute("class", "dot");
            el.style.pointerEvents = "none";
            el.style.position = "absolute";
            sq?.appendChild(el);
          } else if (
            sq?.children[0] &&
            sq?.children[0].getAttribute("class") == "myImage" &&
            pieceId &&
            parent?.children[0] instanceof HTMLElement &&
            pieceId[1] != data.pieceId.slice(0, 1)
          ) {
            if (sq) sq.style.backgroundColor = "rgba(255, 255, 51, 0.5)";
          }
        });
      }

      return () => {
        boardX.removeEventListener("contextmenu", right);
      };
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
      //TODO szach i mat
      //TODO kolejność ruchu
      //TODO refresh nie resetuje planszy sessionStorage.setItem

      const returnData = engine(data);

      function legal() {
        const startIDnumber: number = Number(data.startBoardDivId.slice(1));
        const startIDstring: string = data.startBoardDivId.slice(1);

        const endIDnumber = data.targetBoardId;
        const endIDstring: string = data.targetBoardId.toString();

        const pion = data.pieceId;
        // data.possition[startIDnumber - 1][startIDstring] = "";
        // data.possition[endIDnumber - 1][endIDstring] = pion;
        setPosArr((prevPosArr) => {
          const newPosArr = prevPosArr.map((item) => ({ ...item })); // Tworzenie nowej kopii
          // newPosArr[startIDnumber - 1] = {
          //   ...newPosArr[startIDnumber - 1],
          //   [startIDstring]: "",
          // };
          // newPosArr[endIDnumber - 1] = {
          //   ...newPosArr[endIDnumber - 1],
          //   [endIDstring]: pion,
          // };
          newPosArr[startIDnumber - 1][startIDstring] = "";
          newPosArr[endIDnumber - 1][endIDstring] = pion;

          return newPosArr;
        });

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

        // sessionStorage.setItem("value", JSON.stringify(posArr));
      }

      async function przemiana() {
        //przemiana piona na cieżką figurę
        const x = event.clientX;
        const y = event.clientY;

        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = y + "px";
        div.style.left = x + "px";
        div.style.cursor = "pointer";
        div.style.height = "70px";
        div.style.display = "flex";
        div.style.backgroundColor = "#dce8e0";
        div.setAttribute("class", "przemianaTemp");

        if (data.pieceId == "wp") {
          const rookWhite = document.createElement("img");
          rookWhite.setAttribute("src", "./img/Game-2/wr.png");
          const bishopWhite = document.createElement("img");
          bishopWhite.setAttribute("src", "./img/Game-2/wb.png");
          const knightWhite = document.createElement("img");
          knightWhite.setAttribute("src", "./img/Game-2/wn.png");
          const queenWhite = document.createElement("img");
          queenWhite.setAttribute("src", "./img/Game-2/wq.png");

          div.appendChild(rookWhite);
          div.appendChild(bishopWhite);
          div.appendChild(knightWhite);
          div.appendChild(queenWhite);
        } else {
          const rookBlack = document.createElement("img");
          rookBlack.setAttribute("src", "./img/Game-2/br.png");
          const bishopBlack = document.createElement("img");
          bishopBlack.setAttribute("src", "./img/Game-2/bb.png");
          const knightBlack = document.createElement("img");
          knightBlack.setAttribute("src", "./img/Game-2/bn.png");
          const queenBlack = document.createElement("img");
          queenBlack.setAttribute("src", "./img/Game-2/bq.png");

          div.appendChild(rookBlack);
          div.appendChild(bishopBlack);
          div.appendChild(knightBlack);
          div.appendChild(queenBlack);
        }

        const board = document.querySelector(".chess-grid");
        board?.appendChild(div);

        const temp = document.querySelector(".temp");
        if (temp) board?.removeChild(temp);

        const przemianaBoard: NodeListOf<Element> = document.querySelectorAll(
          ".przemianaTemp > img",
        );

        function przemianaHandler(przemianaBoard: NodeListOf<Element>) {
          return new Promise<HTMLImageElement | null>((res) => {
            przemianaClick.current = (e) => {
              const target = e.target as HTMLImageElement;
              res(target);
            };

            for (let n of przemianaBoard) {
              n.addEventListener(
                "click",
                przemianaClick.current as EventListener,
              );
            }
          });
        }

        przemianaHandler(przemianaBoard).then((event) => {
          let src;
          if (event) src = event.getAttribute("src");

          const element = document.createElement("img");
          element.setAttribute("class", "myImage");
          if (src) element.setAttribute("src", src);

          const tagname = target.tagName;
          let targetId;
          if (tagname == "IMG") {
            targetId = target.parentElement?.getAttribute("id");
            const img = document.querySelector(`#${targetId} > img`);
            const sqTarget = document.querySelector(`#${targetId}`);
            if (img) sqTarget?.removeChild(img);
          } else {
            targetId = target.getAttribute("id");
          }

          let sqTarget;
          if (targetId) sqTarget = document.querySelector(`#${targetId}`);
          const childr = sqTarget?.children;
          if (sqTarget) sqTarget.appendChild(element);

          const przemianaTemp = document.querySelector(".przemianaTemp");
          if (przemianaTemp) board?.removeChild(przemianaTemp);

          const startIDnumber: number = Number(data.startBoardDivId.slice(1));
          const startIDstring: string = data.startBoardDivId.slice(1);

          const endIDnumber = data.targetBoardId;
          const endIDstring: string = data.targetBoardId.toString();

          let pion;
          if (src) pion = src.match(/(\w{2})\.png$/);
          let pionId: string = "";
          if (pion) pionId = pion[1];
          // data.possition[startIDnumber - 1][startIDstring] = "";
          // data.possition[endIDnumber - 1][endIDstring] = pionId;
          setPosArr((prevPosArr) => {
            const newPosArr = prevPosArr.map((item) => ({ ...item })); // Tworzenie nowej kopii
            // newPosArr[startIDnumber - 1] = {
            //   ...newPosArr[startIDnumber - 1],
            //   [startIDstring]: "",
            // };
            // newPosArr[endIDnumber - 1] = {
            //   ...newPosArr[endIDnumber - 1],
            //   [endIDstring]: pion,
            // };
            newPosArr[startIDnumber - 1][startIDstring] = "";
            newPosArr[endIDnumber - 1][endIDstring] = pionId;

            return newPosArr;
          });
        });

        // sessionStorage.setItem("value", JSON.stringify(posArr));

        return () => {
          for (let n of przemianaBoard) {
            n.removeEventListener(
              "click",
              przemianaClick.current as EventListener,
            );
          }
        };
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
            const polePrzemianyTop = [9, 10, 11, 12, 13, 14, 15, 16];
            const polePrzemianyBottom = [49, 50, 51, 52, 53, 54, 55, 56];

            const przeszkodaPionkaGora = document.querySelector(
              `#s${data.startBoardId + 8} > img`,
            );
            let przeszkodamPionkaChildrenTop;
            if (przeszkodaPionkaGora) {
              przeszkodamPionkaChildrenTop =
                przeszkodaPionkaGora.getAttribute("class");
            }

            const przeszkodamPionkaDol = document.querySelector(
              `#s${data.startBoardId - 8} > img`,
            );
            let przeszkodamPionkaChildren;
            if (przeszkodamPionkaDol)
              przeszkodamPionkaChildren =
                przeszkodamPionkaDol.getAttribute("class");

            if (Math.abs(data.startBoardId - targetId) == 8) {
              //TODO na twardo dla białych i czarnych
              if (
                data.pieceId == "wp" &&
                polePrzemianyTop.includes(data.startBoardId)
              ) {
                //pole przemiany góra białe
                przemiana();
                setDubble(0);
              } else if (
                data.pieceId == "bp" &&
                polePrzemianyBottom.includes(data.startBoardId)
              ) {
                //pole przemiany dół czarne
                przemiana();
                setDubble(0);
              } else {
                //pion idzie do przodu na puste pole
                setDubble(0);
                legal();
              }
            } else if (
              Math.abs(data.startBoardId - targetId) == 16 &&
              przeszkodamPionkaChildren &&
              przeszkodamPionkaChildren == "myImage" &&
              polePrzemianyBottom.includes(data.startBoardId)
            ) {
              illegal();
            } else if (
              Math.abs(data.startBoardId - targetId) == 16 &&
              przeszkodamPionkaChildren &&
              przeszkodamPionkaChildren != "myImage" &&
              polePrzemianyBottom.includes(data.startBoardId)
            ) {
              setDubble(targetId);
              legal();
            } else if (
              Math.abs(data.startBoardId - targetId) == 16 &&
              przeszkodamPionkaChildrenTop &&
              przeszkodamPionkaChildrenTop == "myImage" &&
              polePrzemianyTop.includes(data.startBoardId)
            ) {
              illegal();
            } else if (
              Math.abs(data.startBoardId - targetId) == 16 &&
              przeszkodamPionkaChildrenTop &&
              przeszkodamPionkaChildrenTop != "myImage" &&
              polePrzemianyTop.includes(data.startBoardId)
            ) {
              setDubble(targetId);
              legal();
            } else if (
              data.startBoardId - 1 == dubble &&
              top.includes(data.startBoardId) &&
              data.targetBoardId + 9 == data.startBoardId
            ) {
              //pion bije w przeplocie
              wPrzeplocie();
            } else if (
              data.startBoardId + 1 == dubble &&
              top.includes(data.startBoardId) &&
              data.targetBoardId + 7 == data.startBoardId
            ) {
              //pion bije w przeplocie
              wPrzeplocie();
            } else if (
              data.startBoardId - 1 == dubble &&
              bottom.includes(data.startBoardId) &&
              data.targetBoardId - 7 == data.startBoardId
            ) {
              //pion bije w przeplocie
              wPrzeplocie();
            } else if (
              data.startBoardId + 1 == dubble &&
              bottom.includes(data.startBoardId) &&
              data.targetBoardId - 9 == data.startBoardId
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

            const polePrzemianyTop = [9, 10, 11, 12, 13, 14, 15, 16];
            const polePrzemianyBottom = [49, 50, 51, 52, 53, 54, 55, 56];

            //TODO ustawione na twardo dla białych i czarnych
            if (
              Math.abs(data.startBoardId - targetId) == 8 ||
              Math.abs(data.startBoardId - targetId) == 16 ||
              Math.abs(targetId - data.startBoardId) == 16 ||
              Math.abs(targetId - data.startBoardId) == 8
            ) {
              //pionek pórbuje bić na wprost illegal
              illegal();
            } else if (
              data.pieceId == "wp" &&
              polePrzemianyTop.includes(data.startBoardId)
            ) {
              przemiana();
              setDubble(0);
            } else if (
              data.pieceId == "bp" &&
              polePrzemianyBottom.includes(data.startBoardId)
            ) {
              przemiana();
              setDubble(0);
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

      //usuwanie tymczasowego podświetlenia możliwości ruchu
      for (let n = 1; n <= 64; n++) {
        const sqIMGdot = document.querySelector(`#s${n} > .dot`);
        const parent = document.querySelector(`#s${n}`);
        //usuwanie wszystkich inline style
        parent?.removeAttribute("style");
        if (sqIMGdot) {
          parent?.removeChild(sqIMGdot);
        }
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
