export function engine(data: {
  pieceId: string;
  startBoardId: number;
  occupatedSquares: number[];
}) {
  let posPossition: number[] = [];

  switch (data.pieceId) {
    case "br":
    case "wr":
      posPossition = ruchyWiezy(data.startBoardId);
      break;
    case "bn":
    case "wn":
      posPossition = ruchySkoczka(data.startBoardId);
      break;
    case "bb":
    case "wb":
      posPossition = ruchyGonca(data.startBoardId);
      break;
    case "bq":
    case "wq":
      posPossition = ruchyHetmana(data.startBoardId);
      break;
    case "bk":
    case "wk":
      posPossition = ruchyKrola(data.startBoardId);
      break;
    case "bp":
      posPossition = ruchyPionka(data.startBoardId, false);
      break;
    case "wp":
      posPossition = ruchyPionka(data.startBoardId, true);
      break;
  }

  function compareNumbers(a: number, b: number) {
    return a - b;
  }

  function reverseComparenumbers(a: number, b: number) {
    return b - a;
  }

  function ruchyWiezy(pole: number) {
    const zajetePola = data.occupatedSquares;
    const ruchy: number[] = [];
    const wiersz = Math.floor((pole - 1) / 8) + 1; // Wiersz (1-8)
    const kolumna = ((pole - 1) % 8) + 1; // Kolumna (1-8)

    // Ruchy w pionie (góra i dół)
    function wPionie() {
      const rawArr: number[] = [];
      const poss = data.startBoardId;
      rawArr.push(poss);

      for (let i = 1; i <= 8; i++) {
        if (i !== wiersz) {
          rawArr.push((i - 1) * 8 + kolumna);
          // Przesuwanie w pionie
        }
      }
      rawArr.sort(compareNumbers);
      const top: number[] = [];
      const bottom: number[] = [];

      rawArr.map((n) => {
        if (n < poss) {
          top.push(n);
        } else if (n > poss) {
          bottom.push(n);
        }
      });

      top.sort(reverseComparenumbers);

      function topFn() {
        for (let n of top) {
          if (!zajetePola.includes(n)) {
            ruchy.push(n);
          } else if (zajetePola.includes(n)) {
            ruchy.push(n);
            return;
          }
        }
      }
      topFn();

      function bottomFn() {
        for (let n of bottom) {
          if (!zajetePola.includes(n)) {
            ruchy.push(n);
          } else if (zajetePola.includes(n)) {
            ruchy.push(n);
            return;
          }
        }
      }
      bottomFn();
    }
    wPionie();
    // Ruchy w poziomie (lewo i prawo)
    function wPoziomie() {
      const rawArr: number[] = [];
      const poss = data.startBoardId;
      rawArr.push(poss);

      for (let j = 1; j <= 8; j++) {
        if (j !== kolumna) {
          rawArr.push((wiersz - 1) * 8 + j); // Przesuwanie w poziomie
        }
      }
      rawArr.sort(compareNumbers);

      const left: number[] = [];
      const right: number[] = [];

      rawArr.map((n) => {
        if (n < poss) {
          left.push(n);
        } else if (n > poss) {
          right.push(n);
        }
      });

      left.sort(reverseComparenumbers);

      function leftFn() {
        for (let n of left) {
          if (!zajetePola.includes(n)) {
            ruchy.push(n);
          } else if (zajetePola.includes(n)) {
            ruchy.push(n);
            return;
          }
        }
      }
      leftFn();
      function rightFn() {
        for (let n of right) {
          if (!zajetePola.includes(n)) {
            ruchy.push(n);
          } else if (zajetePola.includes(n)) {
            ruchy.push(n);
            return;
          }
        }
      }
      rightFn();
    }
    wPoziomie();

    return ruchy;
  }

  function ruchyGonca(pole: number) {
    const zajetePola = data.occupatedSquares;
    const ruchyGP: number[] = [];
    const ruchyGL: number[] = [];
    const ruchyDP: number[] = [];
    const ruchyDL: number[] = [];
    const ruchy: number[] = [];
    const wiersz = Math.floor((pole - 1) / 8) + 1; // Wiersz (1-8)
    const kolumna = ((pole - 1) % 8) + 1; // Kolumna (1-8)

    // Ruchy na przekątnej w dół w prawo (+1 wiersz, +1 kolumna)
    let r = wiersz + 1;
    let k = kolumna + 1;
    while (r <= 8 && k <= 8) {
      ruchyDP.push((r - 1) * 8 + k);
      r++;
      k++;
    }

    function ruchyDPFn() {
      for (let n of ruchyDP) {
        if (!zajetePola.includes(n)) {
          ruchy.push(n);
        } else if (zajetePola.includes(n)) {
          ruchy.push(n);
          return;
        }
      }
    }
    ruchyDPFn();

    // Ruchy na przekątnej w dół w lewo (+1 wiersz, -1 kolumna)
    r = wiersz + 1;
    k = kolumna - 1;
    while (r <= 8 && k >= 1) {
      ruchyDL.push((r - 1) * 8 + k);
      r++;
      k--;
    }

    function ruchyDLFn() {
      for (let n of ruchyDL) {
        if (!zajetePola.includes(n)) {
          ruchy.push(n);
        } else if (zajetePola.includes(n)) {
          ruchy.push(n);
          return;
        }
      }
    }
    ruchyDLFn();

    // Ruchy na przekątnej w góra w prawo (-1 wiersz, +1 kolumna)
    r = wiersz - 1;
    k = kolumna + 1;
    while (r >= 1 && k <= 8) {
      ruchyGP.push((r - 1) * 8 + k);
      r--;
      k++;
    }

    function ruchyGPFn() {
      for (let n of ruchyGP) {
        if (!zajetePola.includes(n)) {
          ruchy.push(n);
        } else if (zajetePola.includes(n)) {
          ruchy.push(n);
          return;
        }
      }
    }
    ruchyGPFn();

    // Ruchy na przekątnej w dół lewo (-1 wiersz, -1 kolumna)
    r = wiersz - 1;
    k = kolumna - 1;
    while (r >= 1 && k >= 1) {
      ruchyGL.push((r - 1) * 8 + k);
      r--;
      k--;
    }

    function ruchyGLFn() {
      for (let n of ruchyGL) {
        if (!zajetePola.includes(n)) {
          ruchy.push(n);
        } else if (zajetePola.includes(n)) {
          ruchy.push(n);
          return;
        }
      }
    }
    ruchyGLFn();

    return ruchy;
  }

  function ruchySkoczka(pole: number) {
    const ruchy = [];
    const wiersz = Math.floor((pole - 1) / 8) + 1; // Wiersz (1-8)
    const kolumna = ((pole - 1) % 8) + 1; // Kolumna (1-8)

    // Wszystkie możliwe przeskoki skoczka
    const skoki = [
      { r: -2, k: -1 },
      { r: -2, k: 1 },
      { r: -1, k: -2 },
      { r: -1, k: 2 },
      { r: 1, k: -2 },
      { r: 1, k: 2 },
      { r: 2, k: -1 },
      { r: 2, k: 1 },
    ];

    // Iteracja po możliwych skokach
    for (const skok of skoki) {
      const nowyWiersz = wiersz + skok.r;
      const nowaKolumna = kolumna + skok.k;

      // Sprawdzanie, czy nowa pozycja jest na planszy
      if (
        nowyWiersz >= 1 &&
        nowyWiersz <= 8 &&
        nowaKolumna >= 1 &&
        nowaKolumna <= 8
      ) {
        ruchy.push((nowyWiersz - 1) * 8 + nowaKolumna);
      }
    }
    console.log(ruchy);

    return ruchy;
  }

  function ruchyHetmana(pole: number) {
    const zajetePola = data.occupatedSquares;
    const ruchyGP: number[] = [];
    const ruchyGL: number[] = [];
    const ruchyDP: number[] = [];
    const ruchyDL: number[] = [];
    const ruchy: number[] = [];
    const wiersz = Math.floor((pole - 1) / 8) + 1; // Wiersz (1-8)
    const kolumna = ((pole - 1) % 8) + 1; // Kolumna (1-8)

    // Ruchy na przekątnej w dół w prawo (+1 wiersz, +1 kolumna)
    let r = wiersz + 1;
    let k = kolumna + 1;
    while (r <= 8 && k <= 8) {
      ruchyDP.push((r - 1) * 8 + k);
      r++;
      k++;
    }

    function ruchyDPFn() {
      for (let n of ruchyDP) {
        if (!zajetePola.includes(n)) {
          ruchy.push(n);
        } else if (zajetePola.includes(n)) {
          ruchy.push(n);
          return;
        }
      }
    }
    ruchyDPFn();

    // Ruchy na przekątnej w dół w lewo (+1 wiersz, -1 kolumna)
    r = wiersz + 1;
    k = kolumna - 1;
    while (r <= 8 && k >= 1) {
      ruchyDL.push((r - 1) * 8 + k);
      r++;
      k--;
    }

    function ruchyDLFn() {
      for (let n of ruchyDL) {
        if (!zajetePola.includes(n)) {
          ruchy.push(n);
        } else if (zajetePola.includes(n)) {
          ruchy.push(n);
          return;
        }
      }
    }
    ruchyDLFn();

    // Ruchy na przekątnej w góra w prawo (-1 wiersz, +1 kolumna)
    r = wiersz - 1;
    k = kolumna + 1;
    while (r >= 1 && k <= 8) {
      ruchyGP.push((r - 1) * 8 + k);
      r--;
      k++;
    }

    function ruchyGPFn() {
      for (let n of ruchyGP) {
        if (!zajetePola.includes(n)) {
          ruchy.push(n);
        } else if (zajetePola.includes(n)) {
          ruchy.push(n);
          return;
        }
      }
    }
    ruchyGPFn();

    // Ruchy na przekątnej w dół lewo (-1 wiersz, -1 kolumna)
    r = wiersz - 1;
    k = kolumna - 1;
    while (r >= 1 && k >= 1) {
      ruchyGL.push((r - 1) * 8 + k);
      r--;
      k--;
    }

    function ruchyGLFn() {
      for (let n of ruchyGL) {
        if (!zajetePola.includes(n)) {
          ruchy.push(n);
        } else if (zajetePola.includes(n)) {
          ruchy.push(n);
          return;
        }
      }
    }
    ruchyGLFn();

    // Ruchy w pionie (góra i dół)
    function wPionie() {
      const rawArr: number[] = [];
      const poss = data.startBoardId;
      rawArr.push(poss);

      for (let i = 1; i <= 8; i++) {
        if (i !== wiersz) {
          rawArr.push((i - 1) * 8 + kolumna);
          // Przesuwanie w pionie
        }
      }
      rawArr.sort(compareNumbers);
      const top: number[] = [];
      const bottom: number[] = [];

      rawArr.map((n) => {
        if (n < poss) {
          top.push(n);
        } else if (n > poss) {
          bottom.push(n);
        }
      });

      top.sort(reverseComparenumbers);

      function topFn() {
        for (let n of top) {
          if (!zajetePola.includes(n)) {
            ruchy.push(n);
          } else if (zajetePola.includes(n)) {
            ruchy.push(n);
            return;
          }
        }
      }
      topFn();

      function bottomFn() {
        for (let n of bottom) {
          if (!zajetePola.includes(n)) {
            ruchy.push(n);
          } else if (zajetePola.includes(n)) {
            ruchy.push(n);
            return;
          }
        }
      }
      bottomFn();
    }
    wPionie();
    // Ruchy w poziomie (lewo i prawo)
    function wPoziomie() {
      const rawArr: number[] = [];
      const poss = data.startBoardId;
      rawArr.push(poss);

      for (let j = 1; j <= 8; j++) {
        if (j !== kolumna) {
          rawArr.push((wiersz - 1) * 8 + j); // Przesuwanie w poziomie
        }
      }
      rawArr.sort(compareNumbers);

      const left: number[] = [];
      const right: number[] = [];

      rawArr.map((n) => {
        if (n < poss) {
          left.push(n);
        } else if (n > poss) {
          right.push(n);
        }
      });

      left.sort(reverseComparenumbers);

      function leftFn() {
        for (let n of left) {
          if (!zajetePola.includes(n)) {
            ruchy.push(n);
          } else if (zajetePola.includes(n)) {
            ruchy.push(n);
            return;
          }
        }
      }
      leftFn();
      function rightFn() {
        for (let n of right) {
          if (!zajetePola.includes(n)) {
            ruchy.push(n);
          } else if (zajetePola.includes(n)) {
            ruchy.push(n);
            return;
          }
        }
      }
      rightFn();
    }
    wPoziomie();
    console.log(ruchy);
    return ruchy;
  }

  function ruchyKrola(pole: number) {
    const ruchy = [];
    const wiersz = Math.floor((pole - 1) / 8) + 1; // Wiersz (1-8)
    const kolumna = ((pole - 1) % 8) + 1; // Kolumna (1-8)

    // Wszystkie możliwe przesunięcia króla
    const przesuniecia = [
      { r: -1, k: 0 }, // Góra
      { r: 1, k: 0 }, // Dół
      { r: 0, k: -1 }, // Lewo
      { r: 0, k: 1 }, // Prawo
      { r: -1, k: -1 }, // Góra-lewo
      { r: -1, k: 1 }, // Góra-prawo
      { r: 1, k: -1 }, // Dół-lewo
      { r: 1, k: 1 }, // Dół-prawo
    ];

    // Iteracja po możliwych przesunięciach
    for (const przesuniecie of przesuniecia) {
      const nowyWiersz = wiersz + przesuniecie.r;
      const nowaKolumna = kolumna + przesuniecie.k;

      // Sprawdzanie, czy nowa pozycja jest na planszy
      if (
        nowyWiersz >= 1 &&
        nowyWiersz <= 8 &&
        nowaKolumna >= 1 &&
        nowaKolumna <= 8
      ) {
        ruchy.push((nowyWiersz - 1) * 8 + nowaKolumna);
      }
    }

    return ruchy;
  }

  function ruchyPionka(pole: number, czyGracz: boolean) {
    const ruchy = [];
    const wiersz = Math.floor((pole - 1) / 8) + 1; // Wiersz (1-8)
    const kolumna = ((pole - 1) % 8) + 1; // Kolumna (1-8)

    // Kierunek ruchu (dla gracza: w górę, dla przeciwnika: w dół)
    const kierunek = czyGracz ? -1 : 1;

    // Ruch do przodu (jedno pole)
    const nowyWiersz = wiersz + kierunek;
    if (nowyWiersz >= 1 && nowyWiersz <= 8) {
      ruchy.push((nowyWiersz - 1) * 8 + kolumna); // Pole przed pionkiem
    }

    // Ruch początkowy (dwa pola do przodu)
    if ((czyGracz && wiersz === 7) || (!czyGracz && wiersz === 2)) {
      const wierszStartowy = wiersz + 2 * kierunek;
      ruchy.push((wierszStartowy - 1) * 8 + kolumna);
    }

    // Ataki na przekątnych (prawo i lewo)
    for (const przesuniecieKolumny of [-1, 1]) {
      const nowaKolumna = kolumna + przesuniecieKolumny;
      if (
        nowyWiersz >= 1 &&
        nowyWiersz <= 8 &&
        nowaKolumna >= 1 &&
        nowaKolumna <= 8
      ) {
        ruchy.push((nowyWiersz - 1) * 8 + nowaKolumna); // Pole do ataku
      }
    }

    return ruchy;
  }
}

//TODO sprawdzić jaki pionek
//TODO matematyczne granice poruszania pionka
//TODO sprawdzić czy pionek został przeniesiony w granicach poruszania
//TODO sprawdzić czy nie było przeszkód
