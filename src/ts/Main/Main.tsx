import { useEffect, useRef } from "react";

export function Main() {

    
    const textSzachy = `Mój najnowszy projekt to samodzielnie zakodowana aplikacja szachowa. Opracowałem dla niej autorski, podstawowy silnik, który zarządza mechaniką gry, uwzględniając specjalne ruchy (roszada, bicie w przelocie) i kontrolujący legalność posunięć. Wykorzystałem API ChatGPT jako AI przeciwnika, który gra czarnymi`

    const textArcade = `Krótkie demo stworzone na <canvas> z mechaniką podskoku i opadania postaci`

    const textCodePen = `kilka mniejszych projektów w CodePen.io`

    const textImba = `Strona projektu ImbaProfit, pierwotnie stworzona w technologii no-code na platformie Wix, została przeniesiona do czystego HTML i JavaScript (vanilla JS), aby maksymalnie zredukować wagę strony i znacząco przyspieszyć jej ładowanie. Na stronie dostępny jest blog z kilkoma wpisami, wykresy (charty) oraz sekcja wideo.`

    const frontendmasters = `Rozpoczęcie nauki programowania ze szkołą FrontendMasters zaowocowało zdobyciem wielu certyfikatów potwierdzających ukończenie kursów, m.in. "The Hard Parts of Object-Oriented JavaScript", "Web Performance Fundamentals" czy "The Hard Parts of Asynchronous JavaScript". Łącznie ponad 1500 godzin nauki, głównie w formie samodzielnej pracy z kodem.`
    
    const quasar = `Stworzenie pierwszej strony internetowej w technologii no-code na platformie Wix. Wszystkie grafiki oraz opracowania wykonałem samodzielnie. Strona pełni funkcję sklepu oferującego mojego autorskiego HUD-a, stworzonego z myślą o wspieraniu profesjonalnych pokerzystów w rozgrywkach online.`

    

    return (
        <main className="kontener flex-row w-auto">
            <div className="w-[333px]" ><span>{textSzachy}</span></div>
            <div className="w-[333px]"><video autoPlay muted><source src="img/main/szachy-gotowy.mp4" type="video/mp4"></source></video></div>
            <div className="w-[333px]"><video autoPlay muted><source src="img/main/arcade-gotowy.mp4" type="video/mp4"></source></video></div>
            <div className="w-[333px]"><span>{textArcade}</span></div>
            <div className="w-[333px]"><span>{textCodePen}</span></div>
            <div className="w-[333px]"><img src="img/main/codepen.png"></img></div>
            <div className="w-[333px]"><span>{textImba}</span></div>
            <div className="w-[333px]"><video autoPlay muted><source src="img/main/IMBA-gotowy.mp4" type="video/mp4"></source></video></div>
            <div className="w-[333px]"><img src="img/main/front.png"></img></div>
            <div className="w-[333px]"><span>{frontendmasters}</span></div>
            <div className="w-[333px]"><span>{quasar}</span></div>\
            <div className="w-[333px]"><video autoPlay muted><source src="img/main/quasarhud.mp4" type="video/mp4"></source></video></div>

        </main>
    );
  }