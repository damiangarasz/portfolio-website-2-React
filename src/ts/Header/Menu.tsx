import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="w-[350px/30]">
      <div data-state="on">
        <svg
          className="md:hidden"
          aria-hidden="true"
          fill="#000000"
          width="25px"
          height="25px"
          viewBox="0 0 1920 1920"
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
              d="M1920 1411.412v225.882H0v-225.882h1920Zm0-564.706v225.882H0V846.706h1920ZM1920 282v225.882H0V282h1920Z"
              fillRule="evenodd"
            ></path>
          </g>
        </svg>
      </div>
      <div data-state="off" className="x-toggle">
        <svg
          aria-hidden="true"
          width="24px"
          height="24px"
          viewBox="0 -0.5 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>close [#1511]</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-419.000000, -240.000000)"
                fill="#000000"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <polygon
                    id="close-[#1511]"
                    points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
                  ></polygon>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <nav aria-label="main menu hover:color" aria-expanded="false">
        <ol className="main-menu flex cursor-pointer space-x-5">
          <li>
            <span className="dot">•</span>
            Home
          </li>
          <li className="learn relative">
            <span className="dot">•</span>Games<span>⯆</span>
            <ul className="drop-menu absolute top-4 hidden hover:block">
              <li className="text-black">
                <Link to="/game-1">Game 1</Link>
              </li>
              <li className="text-black">
                <Link to="/game-2">Game 2</Link>
              </li>
            </ul>
          </li>
          <li>
            <span className="dot">•</span>Help
          </li>
          <li>
            <span className="dot">•</span>Blog
          </li>
          <li>
            <span className="dot">•</span>About
          </li>
        </ol>
      </nav>
      <a href="#main-menu-toggle" tabIndex={-1} aria-hidden="true" hidden></a>
    </div>
  );
};

export default Menu;
