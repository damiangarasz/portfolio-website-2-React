import { Link } from "react-router-dom";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="relative mx-10 mt-7 flex justify-between font-medium">
      <div className="flex w-[160px]">
        <svg
          className="w-6"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
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
        <Link to="/">
          <span className="text-2xl">Damian Garasz</span>
        </Link>
      </div>
      <Menu />
      <SearchBar />
      <Link
        to="/form"
        className="absolute right-1 rounded-full border border-black px-2 font-normal"
      >
        Sign in
      </Link>
      <div className="w-[175px]"></div>
    </header>
  );
};

export default Header;
