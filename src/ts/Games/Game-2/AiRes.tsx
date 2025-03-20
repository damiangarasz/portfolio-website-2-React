import OpenAI from "openai";

export async function AiRes(state: string) {
  console.log(import.meta.env);

  const client = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY });

  const lol = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: `We play chess, 
                you play black, 
                you can not play castling, 
                chess board is numered from 1 to 64, 
                1 is a8, 2 is b8, 9 is a7 etc...,
                those are names for pieces: 
                br = black rook, wr = white rook,
                bn = black knight, wn = white knight,
                bb = black bishop, wb = white bishop,
                bq = black queen, wq = white queen,
                bk = black king, wk = white king, 
                bp = black pawn, wp = white pawn, 
                I have make a moove, thats how board looks like now: ${state}, 
                for making a move just simply say for example [9, 17] which means 9 goes to 17 nothing more nothing less`,
      },
    ],
  });

  const response = lol.choices[0].message.content;
  console.log(response);
  return response;
}
