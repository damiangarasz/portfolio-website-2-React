import OpenAI from "openai";
const client = new OpenAI();

const completion = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    {
      role: "user",
      content: "what strong is gpt-4o-mini in chess?",
    },
  ],
});

console.log(completion.choices[0].message.content);
