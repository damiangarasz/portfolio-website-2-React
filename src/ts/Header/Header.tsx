import { Link } from 'react-router-dom';
import Menu from './Menu';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="relative flex h-[10vh] w-[100%] items-center justify-between bg-gray-900/50 font-medium">
      <div className="flex w-[180px] justify-center">
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
              fill="#ffea00ff"
            ></path>
            <path
              d="M15 9H12.618L11.118 12L8.88197 12L6 6.23607L4.61803 9H1V15H15V9Z"
              fill="#ff00ffff"
            ></path>
          </g>
        </svg>
        <Link to="/" className="flex items-center">
          <span className="text-xl text-white">Damian Garasz</span>
        </Link>
      </div>
      <Menu />
      <SearchBar />
      <Link
        to="/form"
        className="absolute right-1 rounded-full border border-black px-2 font-normal"
      >
        <p className="text-white">Sign in</p>
      </Link>
      <div className="w-[175px]"></div>
    </header>
  );
};

export default Header;
