import { Link } from "react-router-dom";

export function Main() {
  const textSzachy = `Mój najnowszy projekt to samodzielnie zakodowana aplikacja szachowa. Opracowałem dla niej autorski, podstawowy silnik, który zarządza mechaniką gry, uwzględniając specjalne ruchy (roszada, bicie w przelocie) i kontrolujący legalność posunięć. Wykorzystałem API ChatGPT jako AI przeciwnika, który gra czarnymi`;

  const textArcade = `Krótkie demo stworzone na <canvas> z mechaniką podskoku i opadania postaci`;

  const textCodePen = `kilka mniejszych projektów w CodePen.io`;

  const textImba = `Strona projektu ImbaProfit, pierwotnie stworzona w technologii no-code na platformie Wix, została przeniesiona do czystego HTML i JavaScript (vanilla JS), aby maksymalnie zredukować wagę strony i znacząco przyspieszyć jej ładowanie. Na stronie dostępny jest blog z kilkoma wpisami, wykresy (charty) oraz sekcja wideo.`;

  const frontendmasters = `Rozpoczęcie nauki programowania ze szkołą FrontendMasters zaowocowało zdobyciem wielu certyfikatów potwierdzających ukończenie kursów, m.in. "The Hard Parts of Object-Oriented JavaScript", "Web Performance Fundamentals" czy "The Hard Parts of Asynchronous JavaScript". Łącznie ponad 1500 godzin nauki, głównie w formie samodzielnej pracy z kodem.`;

  const quasar = `Stworzenie pierwszej strony internetowej w technologii no-code na platformie Wix. Wszystkie grafiki oraz opracowania wykonałem samodzielnie. Strona pełni funkcję sklepu oferującego mojego autorskiego HUD-a, stworzonego z myślą o wspieraniu profesjonalnych pokerzystów w rozgrywkach online.`;

  const intro = `Strona jest wciąż w budowie. Została stworzona w technologii React, łącznie ze wszystkimi komponentami, takimi jak wyszukiwarka, gry czy formularz kontaktowy. Poniżej znajduje się krótka historia mojej przygody z programowaniem.`;

  const placeholder = "1";

  return (
    <main className="kontener mx-auto grid w-[832px] grid-cols-2">
      <div className="col-span-2 px-40 py-20 text-center">
        <span>{intro}</span>
      </div>
      <div className="mx-auto flex w-[333px] items-center px-2 py-4 text-justify">
        <Link className="block" to="/Game-2">
          <span>{textSzachy}</span>
        </Link>
      </div>
      <div className="mx-auto w-[400px] items-center justify-center px-2 py-4">
        <Link to="/Game-2">
          <video autoPlay muted loop preload="none">
            <source src="img/main/szachy-gotowy.mp4" type="video/mp4"></source>
          </video>
        </Link>
      </div>
      <div className="mx-auto w-[400px] bg-black bg-opacity-75 px-2 py-4">
        <Link to="/Game-1">
          <video autoPlay muted loop preload="none">
            <source src="img/main/arcade-gotowy.mp4" type="video/mp4"></source>
          </video>
        </Link>
      </div>
      <div className="mx-auto flex w-[400px] items-center bg-black bg-opacity-75 px-2 py-4 text-justify text-white">
        <Link to="/Game-1">
          <span>{textArcade}</span>
        </Link>
      </div>
      <div className="mx-auto flex w-[400px] items-center px-2 py-4 text-justify">
        <a href="https://codepen.io/DamianGarasz" target="_blank">
          <span>{textCodePen}</span>
        </a>
      </div>
      <div className="mx-auto w-[400px] px-2 py-4">
        <a href="https://codepen.io/DamianGarasz" target="_blank">
          <img src="img/main/codepen.png"></img>
        </a>
      </div>
      <div className="mx-auto w-[400px] bg-black bg-opacity-75 px-2 py-4">
        <a href="https://damiangarasz.github.io/ImbaProfit/" target="_blank">
          <video autoPlay muted loop preload="none">
            <source src="img/main/IMBA-gotowy.mp4" type="video/mp4"></source>
          </video>
        </a>
      </div>
      <div className="mx-auto flex w-[400px] items-center bg-black bg-opacity-75 px-2 py-4 text-justify text-white">
        <a href="https://damiangarasz.github.io/ImbaProfit/" target="_blank">
          <span>{textImba} </span>
          <span className="text-red-400">
            (Strona ma obecnie kilka mankamentów z powodu braku obsługi routingu
            przez GitHub Pages)
          </span>
        </a>
      </div>
      <div className="mx-auto flex w-[400px] items-center px-2 py-4 text-justify">
        <a href="https://frontendmasters.com/u/Garik/" target="_blank">
          <span>{frontendmasters}</span>
        </a>
      </div>
      <div className="mx-auto w-[400px] px-2 py-4">
        <a href="https://frontendmasters.com/u/Garik/" target="_blank">
          <img src="img/main/front.png"></img>
        </a>
      </div>
      <div className="mx-auto w-[400px] bg-black bg-opacity-75 px-2 py-4">
        <a href="https://www.quasarhud.com/" target="_blank">
          <video autoPlay muted loop preload="none">
            <source src="img/main/quasarhud.mp4" type="video/mp4"></source>
          </video>
        </a>
      </div>
      <div className="mx-auto flex w-[400px] items-center bg-black bg-opacity-75 px-2 py-4 text-justify text-white">
        <a href="https://www.quasarhud.com/" target="_blank">
          <span>{quasar}</span>
        </a>
      </div>
    </main>
  );
}
