import { useEffect, useRef, useState } from "react";
import { engine } from "./engine";
import { cloneDeep } from "lodash";
import { AiRes } from "./AiRes";

export function MovingPieces() {
  const target = useRef<HTMLElement | null>(null);
  const parent = useRef<HTMLElement | null>(null);
  const changedPos = useRef(false);
  const [fillArr, setFillArr] = useState(false);
  const [dubble, setDubble] = useState(0);
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
  const [didKingMove, setDidKingMove] = useState(() => {
    return false;
  });
  const [didLeftRookMove, setDidLeftRookMove] = useState(() => {
    return false;
  });
  const [didRightRookMove, setDidRightRookMove] = useState(() => {
    return false;
  });
  const [doesItFreeLeft, setDoesItFreeLeft] = useState(() => {
    return false;
  });
  const [doesItFreeRight, setDoesItFreeRight] = useState(() => {
    return false;
  });

  function leftSpace(): boolean | Error {
    const arr = [];
    for (let n = 58; n <= 60; n++) {
      const el = document.querySelector(`#s${n}`);
      arr.push(el);
    }
    for (let arrr of arr) {
      if (
        arrr &&
        arrr.children[0] &&
        arrr.children[0].getAttribute("class") == "myImage"
      ) {
        return false;
      } else {
        return true;
      }
    }
    return new Error("lol");
  }

  function rightSpace(): boolean | Error {
    const arr = [];
    for (let n = 62; n <= 63; n++) {
      const el = document.querySelector(`#s${n}`);
      arr.push(el);
    }
    for (let arrr of arr) {
      if (
        arrr &&
        arrr.children[0] &&
        arrr.children[0].getAttribute("class") == "myImage"
      ) {
        return false;
      } else {
        return true;
      }
    }
    return new Error("lol");
  }

  useEffect(() => {
    setDoesItFreeLeft(true);
    //czyta czy king sie ruszył
    const pastKingMoveString = sessionStorage.getItem("king");
    const pastKingMoveJson =
      pastKingMoveString && JSON.parse(pastKingMoveString)
        ? JSON.parse(pastKingMoveString)
        : "";
    if (pastKingMoveJson) {
      setDidKingMove(pastKingMoveJson);
    }
  }, []);

  const [whoseMove, setWhoseMove] = useState("white");

  useEffect(() => {
    //ustawianie w historii czy king ruszył
    const doesKing = JSON.stringify(didKingMove);
    sessionStorage.setItem("king", doesKing);
  }, [didKingMove]);

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    sessionStorage.setItem("value", JSON.stringify(posArr));
    async function ejaj() {
      const lol = await AiRes(JSON.stringify(posArr));
      console.log(lol);
    }
    ejaj();
  }, [posArr]);
  // hook dla pola przemiany
  const przemianaClick = useRef((e: Event) => {});

  const [dataObj, setDataObj] = useState<{
    pieceId: string;
    startBoardId: number;
    startBoardDivId: string;
    targetBoardId: number;
    occupatedSquares: number[];
    collision: boolean;
    kingCollisions: {
      pieces: Record<string, string>[];
    };
    doesItMove: { [key: string]: boolean };
    doesItFree: { [key: string]: boolean };
  }>({
    pieceId: "",
    startBoardId: 0,
    startBoardDivId: "",
    targetBoardId: 0,
    occupatedSquares: [],
    collision: false,
    kingCollisions: {
      pieces: [],
    },
    doesItMove: {
      king: didKingMove,
      leftRook: didLeftRookMove,
      rightRook: didRightRookMove,
    },
    doesItFree: {
      left: doesItFreeLeft,
      right: doesItFreeRight,
    },
  });

  useEffect(() => {
    //dodawanie kropek
    const engineData = engine(dataObj);

    if (dataObj.pieceId == "wp" || dataObj.pieceId == "bp") {
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

        if (dataObj.startBoardId + 16 == n || dataObj.startBoardId - 16 == n) {
          //pione idze do przodu, sprawdzam czy trafia na img czy kratka jest pusta

          if (dataObj.startBoardId < 32) {
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
        } else if (
          dataObj.startBoardId - 8 == n ||
          dataObj.startBoardId + 8 == n
        ) {
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
            pieceId[1] != dataObj.pieceId.slice(0, 1)
          ) {
            //przechodzi jeżeli w vs b || b vs w
            if (parent instanceof HTMLElement)
              parent.style.backgroundColor = "rgba(255, 255, 51, 0.5)";
          } else if (
            dataObj.startBoardId - 1 == dubble &&
            top.includes(dataObj.startBoardId) &&
            n == dataObj.startBoardId - 9
          ) {
            const parent: HTMLElement | null = document.querySelector(`#s${n}`);
            if (parent) {
              dot();
            }
          } else if (
            dataObj.startBoardId + 1 == dubble &&
            top.includes(dataObj.startBoardId) &&
            n == dataObj.startBoardId - 7
          ) {
            const parent: HTMLElement | null = document.querySelector(`#s${n}`);
            if (parent) {
              dot();
            }
          } else if (
            dataObj.startBoardId - 1 == dubble &&
            bottom.includes(dataObj.startBoardId) &&
            n == dataObj.startBoardId + 7
          ) {
            const parent: HTMLElement | null = document.querySelector(`#s${n}`);
            if (parent) {
              dot();
            }
          } else if (
            dataObj.startBoardId + 1 == dubble &&
            bottom.includes(dataObj.startBoardId) &&
            n == dataObj.startBoardId + 9
          ) {
            const parent: HTMLElement | null = document.querySelector(`#s${n}`);
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
        if (parent?.children[0]) src = parent?.children[0].getAttribute("src");
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
          pieceId[1] != dataObj.pieceId.slice(0, 1)
        ) {
          if (sq) sq.style.backgroundColor = "rgba(255, 255, 51, 0.5)";
        }
      });
    }
  }, [dataObj]);

  useEffect(() => {
    //pobieranie ustawienia pionów z cacha przed refreshem
    const cacheJSON = sessionStorage.getItem("value");
    let cache;
    if (cacheJSON) cache = JSON.parse(cacheJSON);

    if (cache) {
      cache.map((cacheArr: { [key: string]: string }) => {
        const number = Number(Object.keys(cacheArr));
        const pieceId = Object.values(cacheArr)[0];

        const cell = document.querySelector(`#s${number}`);
        const tagName =
          cell && cell.children[0] && cell.children[0].tagName
            ? cell.children[0].tagName
            : "";

        if (cell && tagName == "IMG") {
          const img = document.querySelector(`#s${number} .myImage`);
          const src = img?.getAttribute("src");
          const idArr =
            src && src.match(/(\w{2})\.png$/) ? src.match(/(\w{2})\.png$/) : "";

          const id = idArr && idArr[1] ? idArr[1] : "";

          if (img && pieceId != id && pieceId != "") {
            cell.removeChild(img);

            const el = document.createElement("img");
            el.setAttribute("src", `./img/Game-2/${pieceId}.png`);
            el.setAttribute("class", "myImage");

            cell.appendChild(el);
          } else if (img && pieceId == "") {
            cell.removeChild(img);
          }
        } else if (cell && tagName == "" && pieceId != "") {
          const el = document.createElement("img");
          el.setAttribute("src", `./img/Game-2/${pieceId}.png`);
          el.setAttribute("class", "myImage");

          cell.appendChild(el);
        } else if (cell && tagName.length >= 1 && pieceId == "") {
          const child = document.querySelector(`#s${number} .myImage`);
          if (child) cell.removeChild(child);
        }
      });
    }
  }, [posArr]);

  useEffect(() => {
    //pchanie zajętych kwadratów
    const imgSquare = document.querySelectorAll(".myImage");
    for (let n of imgSquare) {
      const parent = n.parentElement;
      const id = Number(parent?.id.slice(1));

      setDataObj((data) => {
        const newState = cloneDeep(data);
        newState.occupatedSquares.push(id);
        return newState;
      });
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

    setDataObj((data) => {
      const newState = cloneDeep(data);
      newState.kingCollisions.pieces = figures;
      return newState;
    });
  }, []);

  useEffect(() => {
    const square = document.querySelectorAll(".chess-grid > div");
    if (!square) {
      return;
    }

    function MovingPicesHandler(event: MouseEvent) {
      event.preventDefault();

      // if (whoseMove != "white") return;
      //TODO tutaj

      const boardX = document.querySelector(".chess-grid") as HTMLElement;
      function right(e: MouseEvent) {
        e.preventDefault();
      }
      boardX.addEventListener("contextmenu", right);
      if (event.button !== 0) {
        return;
      }

      changedPos.current = false;

      target.current = event.target as HTMLElement;
      const squareWidth = (window.innerWidth * 0.6) / 8;
      const sqAdj = squareWidth / 2;

      if (target.current == null) return;
      parent.current = target.current.parentElement;

      if (target.current.className == "myImage") {
        //dodaje do obiektu data info o początkowym id elementu
        const id = parent.current?.getAttribute("id");

        setDataObj((data) => {
          const newState = cloneDeep(data);
          if (id) newState.startBoardDivId = id;
          return newState;
        });

        setDataObj((data) => {
          const newState = cloneDeep(data);
          if (id) {
            const temp = id.slice(1);
            newState.startBoardId = Number(temp);
          }
          return newState;
        });

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
            setDataObj((data) => {
              const newState = cloneDeep(data);

              newState.startBoardDivId = "";

              return newState;
            });

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
      let letters: string = "";
      if (pieceId) letters = pieceId[1];

      if (letters[0] == "b") return;

      setDataObj((data) => {
        const newState = cloneDeep(data);

        if (letters) newState.pieceId = letters;

        return newState;
      });
      //koniec wyciągania id trzymanego piona

      //TODO lol
      // sprawdzanie czy można roszade czy jest przeszkoda
      if (dataObj.pieceId == "wk" && dataObj.startBoardId == 61) {
        const left = document.querySelector("#s60");
        const right = document.querySelector("#s62");

        if (
          (left && left.children[0] == undefined) ||
          (left &&
            left.children[0] &&
            left.children[0].getAttribute("class") != "myImage")
        ) {
          setDoesItFreeLeft(true);
        }

        if (
          (right && right.children[0] == undefined) ||
          (right &&
            right.children[0] &&
            right.children[0].getAttribute("class") != "myImage")
        ) {
          setDoesItFreeRight(true);
        }
        //TODO trzeba ustawić też false
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
        dataObj.targetBoardId = Number(temp);
      } else if (parentDivId) {
        const temp = parentDivId.slice(1);
        dataObj.targetBoardId = Number(temp);
      }

      //~~~~~~~~~KOMUMIKACJA Z ENGINE LOL~~~~~~~~~~
      //TODO szach i mat
      //TODO kolejność ruchu

      const returnData = engine(dataObj);

      function legal() {
        const startIDnumber: number = Number(dataObj.startBoardDivId.slice(1));
        const startIDstring: string = dataObj.startBoardDivId.slice(1);

        const endIDnumber = dataObj.targetBoardId;
        const endIDstring: string = dataObj.targetBoardId.toString();

        if (dataObj.pieceId == "wk" && startIDnumber != endIDnumber) {
          setDidKingMove((x) => {
            if (x == false) {
              return true;
            } else {
              return true;
            }
          });
        }

        const pion = dataObj.pieceId;
        setPosArr((prevPosArr) => {
          const pastDataString = sessionStorage.getItem("value");
          const pastDataObj =
            pastDataString && JSON.parse(pastDataString)
              ? JSON.parse(pastDataString)
              : "";
          let newPosArr;

          if (pastDataObj) {
            newPosArr = pastDataObj;
          } else {
            newPosArr = prevPosArr.map((item) => ({ ...item }));
          }
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

        setWhoseMove((x): "black" | "error" => {
          if (x == "white") {
            return "black";
          } else {
            return "error";
          }
        });

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

        if (dataObj.pieceId == "wp") {
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

          const startIDnumber: number = Number(
            dataObj.startBoardDivId.slice(1),
          );
          const startIDstring: string = dataObj.startBoardDivId.slice(1);

          const endIDnumber = dataObj.targetBoardId;
          const endIDstring: string = dataObj.targetBoardId.toString();

          let pion;
          if (src) pion = src.match(/(\w{2})\.png$/);
          let pionId: string = "";
          if (pion) pionId = pion[1];

          setPosArr((prevPosArr) => {
            const pastDataString = sessionStorage.getItem("value");
            const pastDataObj =
              pastDataString && JSON.parse(pastDataString)
                ? JSON.parse(pastDataString)
                : "";
            let newPosArr;
            if (pastDataObj) {
              newPosArr = pastDataObj;
            } else {
              newPosArr = prevPosArr.map((item) => ({ ...item }));
            }
            newPosArr[startIDnumber - 1][startIDstring] = "";
            newPosArr[endIDnumber - 1][endIDstring] = pionId;

            return newPosArr;
          });
        });

        // sessionStorage.setItem("value", JSON.stringify(posArr));

        setWhoseMove((x): "black" | "error" => {
          if (x == "white") {
            return "black";
          } else {
            return "error";
          }
        });

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

        const startIDnumber: number = Number(dataObj.startBoardDivId.slice(1));
        const startIDstring: string = dataObj.startBoardDivId.slice(1);

        const endIDnumber = dataObj.targetBoardId;
        const endIDstring: string = dataObj.targetBoardId.toString();

        const pion = dataObj.pieceId;
        setPosArr((prevPosArr) => {
          const pastDataString = sessionStorage.getItem("value");
          const pastDataObj =
            pastDataString && JSON.parse(pastDataString)
              ? JSON.parse(pastDataString)
              : "";
          let newPosArr;

          //TODO grzebie tutaj
          if (pastDataObj) {
            newPosArr = pastDataObj;
          } else {
            newPosArr = prevPosArr.map((item) => ({ ...item }));
          }
          newPosArr[startIDnumber - 1][startIDstring] = "";
          newPosArr[endIDnumber - 1][endIDstring] = pion;

          if (dataObj.pieceId == "wp") {
            newPosArr[endIDnumber + 7]["bp"] = "";
          } else if (dataObj.pieceId == "bp") {
            newPosArr[endIDnumber - 9]["bp"] = "";
          }

          return newPosArr;
        });
        setWhoseMove((x): "black" | "error" => {
          if (x == "white") {
            return "black";
          } else {
            return "error";
          }
        });
      }

      function illegal() {
        const piece = document.querySelector(".temp");
        const pieceSrc = piece?.getAttribute("src");
        const el = document.createElement("img");
        if (!pieceSrc) return;
        el.setAttribute("src", pieceSrc);
        el.className = "myImage";

        const startId = "#s" + dataObj.startBoardId;
        const target = document.querySelector(startId);
        target?.appendChild(el);

        const parent = document.querySelector(".chess-grid");
        if (!piece) return;
        parent?.removeChild(piece);
      }

      function roszada(strona: string) {
        if (strona == "lewa") {
          const oldRookSq = document.querySelector("#s57");
          const oldRookImg = document.querySelector("#s57 .myImage");
          if (oldRookImg) oldRookSq?.removeChild(oldRookImg);

          const newRookSq = document.querySelector("#s60");
          const newRookImg = document.createElement("img");
          newRookImg.setAttribute("src", "./img/Game-2/wr.png");
          newRookImg.setAttribute("class", "myImage");
          newRookSq?.appendChild(newRookImg);

          const oldKingSq = document.querySelector("#s61");
          const oldKingImg = document.querySelector("#s61 .myImage");
          if (oldKingImg) oldKingSq?.removeChild(oldKingImg);

          const newKingSq = document.querySelector("#s59");
          const newKingImg = document.createElement("img");
          newKingImg.setAttribute("src", "./img/Game-2/wk.png");
          newKingImg.setAttribute("class", "myImage");
          newKingSq?.appendChild(newKingImg);

          const board = document.querySelector(".chess-grid");
          const temp = document.querySelector(".temp");
          if (temp) board?.removeChild(temp);
        } else if (strona == "prawa") {
          const oldRookSq = document.querySelector("#s64");
          const oldRookImg = document.querySelector("#s64 .myImage");
          if (oldRookImg) oldRookSq?.removeChild(oldRookImg);

          const newRookSq = document.querySelector("#s62");
          const newRookImg = document.createElement("img");
          newRookImg.setAttribute("src", "./img/Game-2/wr.png");
          newRookImg.setAttribute("class", "myImage");
          newRookSq?.appendChild(newRookImg);

          const oldKingSq = document.querySelector("#s61");
          const oldKingImg = document.querySelector("#s61 .myImage");
          if (oldKingImg) oldKingSq?.removeChild(oldKingImg);

          const newKingSq = document.querySelector("#s63");
          const newKingImg = document.createElement("img");
          newKingImg.setAttribute("src", "./img/Game-2/wk.png");
          newKingImg.setAttribute("class", "myImage");
          newKingSq?.appendChild(newKingImg);

          const board = document.querySelector(".chess-grid");
          const temp = document.querySelector(".temp");
          if (temp) board?.removeChild(temp);
        }
        const startIDnumber: number = Number(dataObj.startBoardDivId.slice(1));
        const startIDstring: string = dataObj.startBoardDivId.slice(1);

        const endIDnumber = dataObj.targetBoardId;
        const endIDstring: string = dataObj.targetBoardId.toString();

        const pion = dataObj.pieceId;
        setPosArr((prevPosArr) => {
          const pastDataString = sessionStorage.getItem("value");
          const pastDataObj =
            pastDataString && JSON.parse(pastDataString)
              ? JSON.parse(pastDataString)
              : "";
          let newPosArr;

          if (pastDataObj) {
            newPosArr = pastDataObj;
          } else {
            newPosArr = prevPosArr.map((item) => ({ ...item }));
          }
          newPosArr[startIDnumber - 1][startIDstring] = "";
          newPosArr[endIDnumber - 1][endIDstring] = pion;

          if (strona == "lewa") {
            newPosArr[56]["57"] = "";
            newPosArr[59]["60"] = "wr";
          } else if (strona == "prawa") {
            newPosArr[63]["64"] = "";
            newPosArr[61]["62"] = "wr";
          } else {
            throw new Error("roszada no bueno");
          }

          return newPosArr;
        });

        setWhoseMove((x): "black" | "error" => {
          if (x == "white") {
            return "black";
          } else {
            return "error";
          }
        });
      }

      if (returnData.isLegal) {
        if (target.tagName == "DIV") {
          if (dataObj.pieceId == "wp" || dataObj.pieceId == "bp") {
            const targetId = Number(target.id.slice(1));
            const top = [25, 26, 27, 28, 29, 30, 31, 32];
            const bottom = [33, 34, 35, 36, 37, 38, 39, 40];
            const polePrzemianyTop = [9, 10, 11, 12, 13, 14, 15, 16];
            const polePrzemianyBottom = [49, 50, 51, 52, 53, 54, 55, 56];

            const przeszkodaPionkaGora = document.querySelector(
              `#s${dataObj.startBoardId + 8} > img`,
            );
            let przeszkodamPionkaChildrenTop;
            if (przeszkodaPionkaGora) {
              przeszkodamPionkaChildrenTop =
                przeszkodaPionkaGora.getAttribute("class");
            }

            const przeszkodamPionkaDol = document.querySelector(
              `#s${dataObj.startBoardId - 8} > img`,
            );
            let przeszkodamPionkaChildren;
            if (przeszkodamPionkaDol)
              przeszkodamPionkaChildren =
                przeszkodamPionkaDol.getAttribute("class");

            if (Math.abs(dataObj.startBoardId - targetId) == 8) {
              //TODO na twardo dla białych i czarnych
              if (
                dataObj.pieceId == "wp" &&
                polePrzemianyTop.includes(dataObj.startBoardId)
              ) {
                //pole przemiany góra białe
                przemiana();
                setDubble(0);
              } else if (
                dataObj.pieceId == "bp" &&
                polePrzemianyBottom.includes(dataObj.startBoardId)
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
              Math.abs(dataObj.startBoardId - targetId) == 16 &&
              przeszkodamPionkaChildren &&
              przeszkodamPionkaChildren == "myImage" &&
              polePrzemianyBottom.includes(dataObj.startBoardId)
            ) {
              illegal();
            } else if (
              Math.abs(dataObj.startBoardId - targetId) == 16 &&
              przeszkodamPionkaChildren &&
              przeszkodamPionkaChildren != "myImage" &&
              polePrzemianyBottom.includes(dataObj.startBoardId)
            ) {
              setDubble(targetId);
              legal();
            } else if (
              Math.abs(dataObj.startBoardId - targetId) == 16 &&
              przeszkodamPionkaChildrenTop &&
              przeszkodamPionkaChildrenTop == "myImage" &&
              polePrzemianyTop.includes(dataObj.startBoardId)
            ) {
              illegal();
            } else if (
              Math.abs(dataObj.startBoardId - targetId) == 16 &&
              przeszkodamPionkaChildrenTop &&
              przeszkodamPionkaChildrenTop != "myImage" &&
              polePrzemianyTop.includes(dataObj.startBoardId)
            ) {
              setDubble(targetId);
              legal();
            } else if (
              dataObj.startBoardId - 1 == dubble &&
              top.includes(dataObj.startBoardId) &&
              dataObj.targetBoardId + 9 == dataObj.startBoardId
            ) {
              //pion bije w przeplocie
              wPrzeplocie();
            } else if (
              dataObj.startBoardId + 1 == dubble &&
              top.includes(dataObj.startBoardId) &&
              dataObj.targetBoardId + 7 == dataObj.startBoardId
            ) {
              //pion bije w przeplocie
              wPrzeplocie();
            } else if (
              dataObj.startBoardId - 1 == dubble &&
              bottom.includes(dataObj.startBoardId) &&
              dataObj.targetBoardId - 7 == dataObj.startBoardId
            ) {
              //pion bije w przeplocie
              wPrzeplocie();
            } else if (
              dataObj.startBoardId + 1 == dubble &&
              bottom.includes(dataObj.startBoardId) &&
              dataObj.targetBoardId - 9 == dataObj.startBoardId
            ) {
              //pion bije w przeplocie
              wPrzeplocie();
            } else {
              //pion chce zagrać po skosie na puste pole
              illegal();
            }
          } else if (
            dataObj.pieceId == "wk" &&
            dataObj.targetBoardId == 59 &&
            didKingMove == false &&
            didLeftRookMove == false &&
            leftSpace()
          ) {
            setDubble(0);
            returnData.legalSquares.push(59);
            console.log("roszada lewa");
            roszada("lewa");
          } else if (
            dataObj.pieceId == "wk" &&
            dataObj.targetBoardId == 63 &&
            didKingMove == false &&
            didRightRookMove == false &&
            rightSpace()
          ) {
            console.log("roszada prawa");
            setDubble(0);
            returnData.legalSquares.push(59);
            roszada("prawa");
          } else {
            console.log("tutaj else");
            setDubble(0);
            //każda inna figura zagrywa na puste pole już po sprawdzeniu czy legal
            legal();
          }
        } else {
          //tutaj figura trafia na inną figurę
          let srcTag = dataObj.pieceId;
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
              Math.abs(dataObj.startBoardId - targetId) == 8 ||
              Math.abs(dataObj.startBoardId - targetId) == 16 ||
              Math.abs(targetId - dataObj.startBoardId) == 16 ||
              Math.abs(targetId - dataObj.startBoardId) == 8
            ) {
              //pionek pórbuje bić na wprost illegal
              illegal();
            } else if (
              dataObj.pieceId == "wp" &&
              polePrzemianyTop.includes(dataObj.startBoardId)
            ) {
              przemiana();
              setDubble(0);
            } else if (
              dataObj.pieceId == "bp" &&
              polePrzemianyBottom.includes(dataObj.startBoardId)
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
      setDataObj((data) => {
        const newState = cloneDeep(data);
        // newState.occupatedSquares = [];

        (newState.pieceId = ""),
          (newState.startBoardId = 0),
          (newState.startBoardDivId = ""),
          (newState.targetBoardId = 0),
          (newState.occupatedSquares = []),
          (newState.collision = false);
        // (newState.kingCollisions = {
        //   pieces: [],
        // });

        return newState;
      });
      // data.occupatedSquares = [];
      //TODO zmiana
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
