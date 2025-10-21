import { useState, useEffect, useRef, useLayoutEffect } from 'react';

const data = [
  'krówka',
  'konik',
  'muszka',
  'prówka',
  'robaczek',
  'krokusek',
  'krokodylek',
];

const SearchBar = () => {
  const [search, searchResoult] = useState('');
  const [wynik, filtrowanie] = useState<string[]>([]);
  const [animachaSearchBara, aktywacjaAnimacjiSearchBara] = useState(false);

  useEffect(
    function searchFunction() {
      const filteredData = data.filter((word) => {
        return word.toLowerCase().includes(search.toLowerCase());
      });
      filtrowanie(filteredData);
    },
    [search]
  );

  useEffect(() => {
    const lol = document.querySelector<HTMLElement>('.hint');
    if (search.length != 0) {
      if (lol) {
        lol.classList.remove('hidden');
        lol.classList.add('visible');
        console.log(search);
      }
    } else {
      if (lol) {
        lol.classList.remove('visible');
        lol.classList.add('hidden');
      }
    }
  }, [wynik]);

  // ----- logika kliknięcia w lupę początek

  const [stanSearchBar, searchBarFn] = useState('off');
  const [stanLupa, lupaFn] = useState('on');
  function lupaSwitch() {
    searchBarFn((prev): string => (prev === 'off' ? 'on' : 'off'));
    lupaFn((prev): string => (prev === 'on' ? 'off' : 'on'));
    aktywacjaAnimacjiSearchBara(true);
  }

  //kliknięcie poza form i lupą powoduje zamknięcie search bara
  const formRef = useRef<HTMLFormElement>(null);
  const lupaRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function clickOutside(event: MouseEvent) {
      if (
        stanSearchBar == 'on' &&
        formRef.current &&
        !formRef.current.contains(event.target as Node) &&
        lupaRef.current &&
        !lupaRef.current.contains(event.target as Node)
      ) {
        lupaSwitch();
        aktywacjaAnimacjiSearchBara(false);
      }
    }

    document.addEventListener('click', clickOutside);

    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, [stanSearchBar]);
  // ----- logika klikniecia w lupę koniec
  // ----- logika smooth search bara początek

  let aktualnaSzerokoscOkna = 1024;
  // let poczatkowaSzerokoscSearchBara = 50;

  const poczatkowaSzerokoscSearchBara = useRef(25);

  let docelowaSzererokoscSearchBara: number = 300;

  const searchBar = useRef<HTMLInputElement>(null);

  useEffect(() => {
    //TODO animacja po zapisaniu nowego kodu szarpie / odtwarza się dwa razy
    //TODO animacja sie na nowo odpala po wpisaniu litery
    function kolejnaFn() {
      aktualnaSzerokoscOkna = window.innerWidth;
      animacjaSearchBara();
      docelowaSzererokoscSearchBara = aktualnaSzerokoscOkna * 0.13;
    }
    kolejnaFn();

    window.addEventListener('resize', kolejnaFn);

    const animacja = requestAnimationFrame(animacjaSearchBara);

    function animacjaSearchBara() {
      const tolerancja = 5;

      if (
        Math.abs(
          docelowaSzererokoscSearchBara - poczatkowaSzerokoscSearchBara.current
        ) < tolerancja
      ) {
        //jezeli Math.abs zwróci true to returnuje całą funkcję co zatrzymuje animacje

        return;
      }
      if (
        poczatkowaSzerokoscSearchBara.current < docelowaSzererokoscSearchBara
      ) {
        poczatkowaSzerokoscSearchBara.current++;
      } else if (
        poczatkowaSzerokoscSearchBara.current > docelowaSzererokoscSearchBara
      ) {
        poczatkowaSzerokoscSearchBara.current--;
      }

      if (searchBar.current) {
        searchBar.current.style.width = `${poczatkowaSzerokoscSearchBara.current}px`;
      }

      requestAnimationFrame(animacjaSearchBara);
    }

    return () => {
      window.removeEventListener('resize', kolejnaFn);
      cancelAnimationFrame(animacja);
    };
  }, [animachaSearchBara]);

  // ----- logika smooth search bara koniec

  return (
    <div className="absolute right-2">
      <form
        ref={formRef}
        onSubmit={lupaSwitch}
        data-state={stanSearchBar}
        className="search-bar"
      >
        <div className="relative">
          <input
            onChange={(e) => {
              searchResoult(e.target.value);
            }}
            ref={searchBar}
            type="search"
            data-state=""
            placeholder="search"
            className="absolute -top-0.5 right-[75px] h-3 rounded-full"
          />
          {/* mapowanie wyników search bara */}
          <ul className="hint absolute right-[105px] top-6 hidden">
            {wynik.map((wynik, index) => {
              return <li key={index}>{wynik}</li>;
            })}
          </ul>
          <button data-state="on">
            <svg
              fill="#ffffffff"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM16.637 9.957c-0.39 0.39-0.39 1.024 0 1.414l3.617 3.617h-11.264c-0.553 0-1 0.448-1 1s0.447 1 1 1h11.327l-3.68 3.68c-0.39 0.39-0.39 1.023 0 1.414 0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293l5.907-6.063-5.907-6.063c-0.391-0.39-1.023-0.39-1.415 0z"></path>
              </g>
            </svg>
          </button>
        </div>
      </form>
      {/* lupa początek*/}
      <button
        ref={lupaRef}
        onClick={() => {
          poczatkowaSzerokoscSearchBara.current = 25;
          lupaSwitch();
          console.log(poczatkowaSzerokoscSearchBara.current);
        }}
        data-state={stanLupa}
        className="lupa absolute -top-2 right-20 hover:cursor-pointer"
      >
        <svg
          fill="#ffffffff"
          viewBox="0 0 32 32"
          version="1.1"
          width="20px"
          height="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M31.707 30.282l-9.717-9.776c1.811-2.169 2.902-4.96 2.902-8.007 0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5c3.136 0 6.002-1.158 8.197-3.067l9.703 9.764c0.39 0.39 1.024 0.39 1.415 0s0.39-1.023 0-1.415zM12.393 23.016c-5.808 0-10.517-4.709-10.517-10.517s4.708-10.517 10.517-10.517c5.808 0 10.516 4.708 10.516 10.517s-4.709 10.517-10.517 10.517z"></path>
          </g>
        </svg>
      </button>
      {/* lupa koniec */}
    </div>
  );
};

export default SearchBar;
