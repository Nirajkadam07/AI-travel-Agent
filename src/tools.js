import dotenv from "dotenv";
import "dotenv/config";
dotenv.config();

export async function getWeather(location) {
  try {
    const weatherUrl = new URL(
      "https://api.openweathermap.org/data/3.0/onecall/day_summary?lat={lat}&lon={lon}&date={date}&appid={API key}",
    );
    weatherUrl.searchParams.append("q", location);
    weatherUrl.searchParams.append("date", "2026-12-23");
    weatherUrl.searchParams.append("appid", process.env.WEATHER_API_KEY);
    weatherUrl.searchParams.append("units", "metric");
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

getWeather("nashik");

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
