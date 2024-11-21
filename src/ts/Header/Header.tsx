import Menu from "./Menu";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="flex justify-between">
      <div className="flex">
        <svg
          className="w-6"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M15 1H1V7H3.38197L4.88196 4L7.11803 4L10 9.76393L11.382 7H15V1Z"
              fill="#000000"
            ></path>
            <path
              d="M15 9H12.618L11.118 12L8.88197 12L6 6.23607L4.61803 9H1V15H15V9Z"
              fill="#000000"
            ></path>
          </g>
        </svg>
        <span>Damian Garasz</span>
      </div>
      <Menu />
      <SearchBar />
      <button>Sign in</button>
    </header>
  );
};

export default Header;
