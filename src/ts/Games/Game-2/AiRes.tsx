export async function AiRes(state: string) {
  const cloudFunctionUrl =
    "https://europe-west1-spatial-box-456215-j3.cloudfunctions.net/moj-openai-proxy";

  const prompt = {
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: `We play chess; 
                you play black; 
                you can not play castling; 
                chess board is numered from 1 to 64; 
                1 = a8, 2 = b8, 3 = c8 , 4 = d8 , 5 = e8 , 6 = f8 , 7 = g8 , 8 = h8 , 
                9 = a7 , 10 = b7 , 11 = c7 , 12 = d7 , 13 = e7 , 14 = f7 , 15 = g7 , 16 = h7 , 
                17 = a6 , 18 = b6 , 19 = c6 , 20 = d6 , 21 = e6 , 22 = f6 , 23 = g6 , 24 = h6 ,
                 25 = a5 , 26 = b5 , 27 = c5 , 28 = d5 , 29 = e5 , 30 = f5 , 31 = g5 , 32 = h5 , 
                 33 = a4 , 34 = b4 , 35 = c4 , 36 = d4 , 37 = e4 , 38 = f4 , 39 = g4 , 40 = h4 , 
                 41 = a3 , 42 = b3 , 43 = c3 , 44 = d3 , 45 = e3 , 46 = f3 , 47 = g3 , 48 = h3 , 
                 49 = a2 , 50 = b2 , 51 = c2 , 52 = d2 , 53 = e2 , 54 = f2 , 55 = g2 , 56 = h2 , 
                 57 = a1 , 58 = b1 , 59 = c1 , 60 = d1 , 61 = e1 , 62 = f1 , 63 = g1 , 64 = h1;
                those are names for pieces: 
                br = black rook, wr = white rook,
                bn = black knight, wn = white knight,
                bb = black bishop, wb = white bishop,
                bq = black queen, wq = white queen,
                bk = black king, wk = white king, 
                bp = black pawn, wp = white pawn, 
                I have make a move only black pieces;
                Thats how board looks like now: ${state};
                for making a move just simply say for example [9, 17] which means 9 goes to 17 nothing more nothing less; dont write anything but numbers in []`,
      },
    ],
  };

  try {
    const response = await fetch(cloudFunctionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prompt),
    });
    const data = await response.json();
    let numbers;
    if (data) numbers = data.match(/\d+/g);
    return numbers;
  } catch {
    console.error("Błąd podczas komunikacji z funkcją:", Error);
  }

  // const response = "";
  // let numbers;
  // if (response) numbers = response.match(/\d+/g); lol
  // return numbers;
}
