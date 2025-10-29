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

  //ustawienie zmieniania się obrazków
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
      console.log(e);
      if (e.deltaY > 0 && pageShown < 21) {
        setPageShown((num) => num + 1);
      } else if (e.deltaY < 0 && pageShown > 0) {
        setPageShown((num) => num - 1);
      } else if (e.deltaY > 0 && pageShown == 21) {
        setPageShown(21);
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
    if (pageShown < 3) {
      return (
        <div className="col-span-2 mx-auto flex h-[100%] max-w-xl animate-slideIntro items-center text-xl">
          <p className="bg-gray-900/70 p-[20px] text-center text-white">
            {intro}
          </p>
        </div>
      );
    } else if (pageShown >= 3 && pageShown < 6) {
      const lol = `./img/main/Zrzut ekranu ${obrazekLiczydlo}.png`;
      return render(
        <p className="animate-kafel1 bg-gray-900/70 p-[20px] text-center text-white">
          {textApkaMath}
        </p>,
        <img className="m-auto w-[50%] animate-kafel2" src={lol} />
      );
    } else if (pageShown >= 6 && pageShown < 9) {
      return render(
        <video className="animate-kafel1" autoPlay loop muted preload="none">
          <source src="./img/main/szachy-gotowy.mp4" type="video/mp4" />
        </video>,
        <p className="animate-kafel2 bg-gray-900/70 p-[20px] text-center text-white">
          {textSzachy}
        </p>
      );
    } else if (pageShown >= 9 && pageShown < 12) {
      return render(
        <p className="animate-kafel2 bg-gray-900/70 p-[20px] text-center text-white">
          {textArcade}
        </p>,
        <video className="animate-kafel1" autoPlay loop muted preload="none">
          <source src="./img/main/arcade-gotowy.mp4" type="video/mp4" />
        </video>
      );
    } else if (pageShown >= 12 && pageShown < 15) {
      return render(
        <img className="animate-kafel2" src="./img/main/codepen.png" />,
        <p className="animate-kafel1 bg-gray-900/70 p-[20px] text-center text-white">
          {textCodePen}
        </p>
      );
    } else if (pageShown >= 15 && pageShown < 18) {
      return render(
        <p className="animate-kafel1 bg-gray-900/70 p-[20px] text-center text-white">
          {textImba}
        </p>,
        <video className="animate-kafel2" autoPlay loop muted preload="none">
          <source src="./img/main/IMBA-gotowy.mp4" type="video/mp4" />
        </video>
      );
    } else if (pageShown >= 18 && pageShown < 21) {
      return render(
        <img className="animate-kafel1" src="./img/main/front.png" />,
        <p className="animate-kafel2 bg-gray-900/70 p-[20px] text-center text-white">
          {frontendmasters}
        </p>
      );
    } else if (pageShown >= 21 && pageShown < 24) {
      return render(
        <p className="animate-kafel1 bg-gray-900/70 p-[20px] text-center text-white">
          {quasar}
        </p>,
        <video className="animate-kafel2" autoPlay loop muted preload="none">
          <source src="./img/main/quasarhud.mp4" type="video/mp4" />
        </video>
      );
    }

    function render(
      tail1: ReactElement | string,
      tail2: ReactElement | string
    ) {
      return (
        <div className="kontener m-auto flex h-[100%] w-[75%] flex-row items-center gap-3 text-justify align-baseline">
          <div className="tail-1 w-[50%] text-xl">{tail1}</div>
          <div className="tail-2 w-[50%] text-xl">{tail2}</div>
        </div>
      );
    }
  };

  return (
    <main className="kontener relative h-[90vh] w-[100%]">
      {lol()}
      <div className="kursor absolute left-[47%] top-[78%]">
        <img
          src="./img/main/mouse-scroll.svg"
          alt="Myszka scroll"
          className="h-36 w-24"
        />
      </div>
    </main>
  );
}
