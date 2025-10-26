import { ReactElement, useEffect, useState } from 'react';

export function Main() {
  const textApkaMath =
    'Pierwsza aplikacja stworzona w React Native opublikowana w Google Play. Aktualnie dostępna w wersji Alfa dla testów';

  const textSzachy = `Mój najnowszy projekt to samodzielnie zakodowana aplikacja szachowa. Opracowałem dla niej autorski, podstawowy silnik, który zarządza mechaniką gry, uwzględniając specjalne ruchy (roszada, bicie w przelocie) i kontrolujący legalność posunięć. Wykorzystałem API ChatGPT jako AI przeciwnika, który gra czarnymi`;

  const textArcade = `Krótkie demo stworzone na <canvas> z mechaniką podskoku i opadania postaci`;

  const textCodePen = `kilka mniejszych projektów w CodePen.io`;

  const textImba = `Strona projektu ImbaProfit, pierwotnie stworzona w technologii no-code na platformie Wix, została przeniesiona do czystego HTML i JavaScript (vanilla JS), aby maksymalnie zredukować wagę strony i znacząco przyspieszyć jej ładowanie. Na stronie dostępny jest blog z kilkoma wpisami, wykresy (charty) oraz sekcja wideo.`;

  const frontendmasters = `Rozpoczęcie nauki programowania ze szkołą FrontendMasters zaowocowało zdobyciem wielu certyfikatów potwierdzających ukończenie kursów, m.in. "The Hard Parts of Object-Oriented JavaScript", "Web Performance Fundamentals" czy "The Hard Parts of Asynchronous JavaScript". Łącznie ponad 1500 godzin nauki, głównie w formie samodzielnej pracy z kodem.`;

  const quasar = `Stworzenie pierwszej strony internetowej w technologii no-code na platformie Wix. Wszystkie grafiki oraz opracowania wykonałem samodzielnie. Strona pełni funkcję sklepu oferującego mojego autorskiego HUD-a, stworzonego z myślą o wspieraniu profesjonalnych pokerzystów w rozgrywkach online.`;

  const intro = `Strona jest wciąż w budowie. Została stworzona w technologii React, łącznie ze wszystkimi komponentami, takimi jak wyszukiwarka, gry czy formularz kontaktowy. Poniżej znajduje się krótka historia mojej przygody z programowaniem.`;

  const iloscPodstorn = 8;

  const [pageShown, setPageShown] = useState(0);
  const [obrazekLiczydlo, setobrazekLiczydlo] = useState(1);

  useEffect(() => {
    if (pageShown == 1) {
      const timer = setInterval(() => {
        setobrazekLiczydlo((prev) => {
          if (prev >= 3) {
            return 1;
          } else {
            return prev + 1;
          }
        });
      }, 3000);
      return () => clearInterval(timer);
    } else {
      return;
    }
  });

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && pageShown < 8) {
        setPageShown((num) => num + 1);
      } else if (e.deltaY < 0 && pageShown > 0) {
        setPageShown((num) => num - 1);
      } else if (e.deltaY > 0 && pageShown == 8) {
        setPageShown(8);
      } else if (e.deltaY < 0 && pageShown <= 0) {
        setPageShown(0);
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [pageShown]);

  const lol = () => {
    if (pageShown == 0) {
      return (
        <div className="animate-slideIntro col-span-2 mx-auto flex h-[100%] max-w-xl items-center text-xl">
          <p className="bg-gray-900/70 p-[20px] text-center text-white">
            {intro}
          </p>
        </div>
      );
    } else {
      switch (pageShown) {
        case 1:
          const lol = `./img/main/Zrzut ekranu ${obrazekLiczydlo}.png`;
          return render(
            <p className="animate-kafel1 bg-gray-900/70 p-[20px] text-center text-white">
              {textApkaMath}
            </p>,
            <img className="animate-kafel2 m-auto w-[50%]" src={lol} />
          );
        case 2:
          return render(
            <video
              className="animate-kafel1"
              autoPlay
              key={pageShown}
              loop
              muted
              preload="none"
            >
              <source src="./img/main/szachy-gotowy.mp4" type="video/mp4" />
            </video>,
            <p className="animate-kafel2 bg-gray-900/70 p-[20px] text-center text-white">
              {textSzachy}
            </p>
          );
        case 3:
          return render(
            <video
              className="animate-kafel1"
              autoPlay
              key={pageShown}
              loop
              muted
              preload="none"
            >
              <source src="./img/main/arcade-gotowy.mp4" type="video/mp4" />
            </video>,
            <p className="animate-kafel2 bg-gray-900/70 p-[20px] text-center text-white">
              {textArcade}
            </p>
          );
        case 4:
          return render(
            <p className="animate-kafel1 bg-gray-900/70 p-[20px] text-center text-white">
              {textCodePen}
            </p>,
            <img className="animate-kafel2" src="./img/main/codepen.png" />
          );
        case 5:
          return render(
            <p className="animate-kafel1 bg-gray-900/70 p-[20px] text-center text-white">
              {textImba}
            </p>,
            <video
              className="animate-kafel2"
              autoPlay
              loop
              muted
              preload="none"
            >
              <source src="./img/main/IMBA-gotowy.mp4" type="video/mp4" />
            </video>
          );
        case 6:
          return render(
            <img className="animate-kafel1" src="./img/main/front.png" />,
            <p className="animate-kafel2 bg-gray-900/70 p-[20px] text-center text-white">
              {frontendmasters}
            </p>
          );
        case 7:
          return render(
            <p className="animate-kafel1 bg-gray-900/70 p-[20px] text-center text-white">
              {quasar}
            </p>,
            <video
              className="animate-kafel2"
              autoPlay
              loop
              muted
              preload="none"
            >
              <source src="./img/main/quasarhud.mp4" type="video/mp4" />
            </video>
          );
        default:
          return <div>dupa</div>;
      }
    }
    function render(
      tail1: ReactElement | string,
      tail2: ReactElement | string
    ) {
      return (
        <div className="kontener relative m-auto flex h-[100%] w-[75%] flex-row items-center text-justify align-baseline">
          <div className="tail-1 w-[50%]">{tail1}</div>
          <div className="tail-2 w-[50%]">{tail2}</div>
          <div className="kursor absolute">
            <img
              src="./img/main/mouse_scroll.svg"
              alt="Myszka scroll"
              className="h-36 w-24"
            />
          </div>
        </div>
      );
    }
  };

  return (
    <main className="kontener h-[90vh] w-[100%]">{lol()}</main>
    //   <main className="kontener mx-auto grid w-[832px] grid-cols-2">
    //<div className="mx-auto flex h-[100%] w-[75%] items-center">
    //   <div className="mx-auto flex w-[333px] items-center px-2 py-4 text-justify">
    //     <Link className="block" to="/Game-2">
    //       <p className="text-white">{textSzachy}</p>
    //     </Link>
    //   </div>
    //   <div className="mx-auto w-[400px] items-center justify-center px-2 py-4">
    //     <Link to="/Game-2">
    //       <video autoPlay muted loop preload="none">
    //         <source
    //           src="img/main/szachy-gotowy.mp4"
    //           type="video/mp4"
    //         ></source>
    //       </video>
    //     </Link>
    //   </div>
    // </div>
    //
    //<div>
    //   <div className="mx-auto w-[400px] bg-black bg-opacity-75 px-2 py-4">
    //     <Link to="/Game-1">
    //       <video autoPlay muted loop preload="none">
    //         <source
    //           src="img/main/arcade-gotowy.mp4"
    //           type="video/mp4"
    //         ></source>
    //       </video>
    //     </Link>
    //   </div>
    //   <div className="mx-auto flex w-[400px] items-center bg-black bg-opacity-75 px-2 py-4 text-justify text-white">
    //     <Link to="/Game-1">
    //       <p className="text-white">{textArcade}</p>
    //     </Link>
    //   </div>
    // </div>
    //     <div className="mx-auto flex w-[400px] items-center px-2 py-4 text-justify">
    //       <a href="https://codepen.io/DamianGarasz" target="_blank">
    //         <p className="text-white">{textCodePen}</p>
    //       </a>
    //     </div>
    //     <div className="mx-auto w-[400px] px-2 py-4">
    //       <a href="https://codepen.io/DamianGarasz" target="_blank">
    //         <img src="img/main/codepen.png"></img>
    //       </a>
    //     </div>
    //     <div className="mx-auto w-[400px] bg-black bg-opacity-75 px-2 py-4">
    //       <a href="https://damiangarasz.github.io/ImbaProfit/" target="_blank">
    //         <video autoPlay muted loop preload="none">
    //           <source src="img/main/IMBA-gotowy.mp4" type="video/mp4"></source>
    //         </video>
    //       </a>
    //     </div>
    //     <div className="mx-auto flex w-[400px] items-center bg-black bg-opacity-75 px-2 py-4 text-justify text-white">
    //       <a href="https://damiangarasz.github.io/ImbaProfit/" target="_blank">
    //         <p className="text-white">{textImba} </p>
    //         <span className="text-red-400">
    //           (Strona ma obecnie kilka mankamentów z powodu braku obsługi routingu
    //           przez GitHub Pages)
    //         </span>
    //       </a>
    //     </div>
    //     <div className="mx-auto flex w-[400px] items-center px-2 py-4 text-justify">
    //       <a href="https://frontendmasters.com/u/Garik/" target="_blank">
    //         <p className="text-white">{frontendmasters}</p>
    //       </a>
    //     </div>
    //     <div className="mx-auto w-[400px] px-2 py-4">
    //       <a href="https://frontendmasters.com/u/Garik/" target="_blank">
    //         <img src="img/main/front.png"></img>
    //       </a>
    //     </div>
    //     <div className="mx-auto w-[400px] bg-black bg-opacity-75 px-2 py-4">
    //       <a href="https://www.quasarhud.com/" target="_blank">
    //         <video autoPlay muted loop preload="none">
    //           <source src="img/main/quasarhud.mp4" type="video/mp4"></source>
    //         </video>
    //       </a>
    //     </div>
    //     <div className="mx-auto flex w-[400px] items-center bg-black bg-opacity-75 px-2 py-4 text-justify text-white">
    //       <a href="https://www.quasarhud.com/" target="_blank">
    //         <p className="text-white">{quasar}</p>
    //       </a>
    //     </div>
    //   </main>
  );
}
