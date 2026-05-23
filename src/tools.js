import dotenv from "dotenv";
dotenv.config();
console.log(process.env.WEATHER_API_KEY);

export async function getWeather(location) {
  try {
    const weatherUrl = new URL(
      "https://api.openweathermap.org/data/2.5/weather",
    );
    weatherUrl.searchParams.append("q", location);
    weatherUrl.searchParams.append("appid", process.env.WEATHER_API_KEY);
    const res = await fetch(weatherUrl);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${data.message}`);
    }

    console.log(JSON.stringify(data));
  } catch (err) {
    console.error(err.message);
  }
}

getWeather("Delhi");

export const tools = [
  {
    type: "function",
    name: "get_weather",
    description: "Get weather data for given location",
    parameters: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "Location to travel to",
        },
      },
      required: ["location"],
    },
  },
];
