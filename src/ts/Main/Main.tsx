import { useEffect, useRef } from "react";

export function Main() {

    
    const textSzachy = `Mój najnowszy projekt to samodzielnie zakodowana aplikacja szachowa. Opracowałem dla niej autorski, podstawowy silnik, który zarządza mechaniką gry, uwzględniając specjalne ruchy (roszada, bicie w przelocie) i kontrolujący legalność posunięć. Wykorzystałem API ChatGPT jako AI przeciwnika, który gra czarnymi`
    

    

    return (
        <main className="kontener">
            <div><span>{textSzachy}</span></div>
            <div><video autoPlay muted><source src="img/main/szachy-gotowy.mp4" type="video/mp4"></source></video></div>
            <div><img src="img/main/1.webp
            "></img></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </main>
    );
  }