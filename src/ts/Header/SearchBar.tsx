import { useState, useEffect, useRef } from "react";

const data = [
  "krówka",
  "konik",
  "muszka",
  "prówka",
  "robaczek",
  "krokusek",
  "krokodylek",
];

const SearchBar = () => {
  const [search, searchResoult] = useState("");
  const [wynik, filtrowanie] = useState<string[]>([]);

  useEffect(
    function searchFunction() {
      const filteredData = data.filter((word) => {
        return word.toLowerCase().includes(search.toLowerCase());
      });
      filtrowanie(filteredData);
    },
    [search],
  );

  useEffect(() => {
    const lol = document.querySelector<HTMLElement>(".hint");
    if (search.length != 0) {
      if (lol) {
        lol.classList.remove("hidden");
        lol.classList.add("visible");
        console.log(search);
      }
    } else {
      if (lol) {
        lol.classList.remove("visible");
        lol.classList.add("hidden");
      }
    }
  }, [wynik]);

  // logika kliknięcia w lupę początek

  const [stanSearchBar, searchBarFn] = useState("off");
  const [stanLupa, lupaFn] = useState("on");
  function lupaSwitch() {
    searchBarFn((prev): string => (prev === "off" ? "on" : "off"));
    lupaFn((prev): string => (prev === "on" ? "off" : "on"));
  }

  // logika klikniecia w lupę koniec

  return (
    <div>
      <form
        onSubmit={lupaSwitch}
        data-state={stanSearchBar}
        className="search-bar"
      >
        <div>
          <input
            onChange={(e) => {
              searchResoult(e.target.value);
            }}
            type="search"
            data-state=""
            placeholder="search"
          />
          <ul className="hint absolute hidden">
            {wynik.map((wynik, index) => {
              return <li key={index}>{wynik}</li>;
            })}
          </ul>
          <button data-state="on">
            <svg
              fill="#000000"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
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
        onClick={lupaSwitch}
        data-state={stanLupa}
        className="lupa hover:cursor-pointer"
      >
        <svg
          fill="#000000"
          viewBox="0 0 32 32"
          version="1.1"
          width="25px"
          height="25px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
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
