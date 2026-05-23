import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const messages = [
    {
      role: "system",
      content: `You are a helpful AI travel agent. Transform technical data into engaging,
                conversational responses, but only include the normal information a 
                regular person might want unless they explicitly ask for more. Provide 
                highly specific answers based on the information you're given. Prefer 
                to gather information with the tools provided to you rather than 
                giving basic, generic answers.`,
    },
  ],

const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages
});

console.log(response.choices[0].message.content);
