"use client";

import React, { useState, useEffect } from "react";
import ComponentLayout from "../componentLayout";

interface WeatherData {
  current: {
    time: string;
    temperature_2m: number;
    cloud_cover: number;
    is_day: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    cloud_cover: number[];
  };
}

const WeatherForecast: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const lat = 51.5157368;
        const lon = -0.1414441;
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,cloud_cover,is_day&hourly=temperature_2m,cloud_cover&timezone=auto`,
        );

        if (!response.ok) {
          throw new Error("Weather data fetch failed");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError("Failed to load weather data");
        console.error(err);
      }
    };
    fetchWeather();
  }, []);

  const getWeatherDescription = (cloudCover: number) => {
    if (cloudCover < 20) return "Clear";
    if (cloudCover < 50) return "Partly Cloudy";
    if (cloudCover < 80) return "Mostly Cloudy";
    return "Cloudy";
  };

  if (error)
    return (
      <ComponentLayout>
        <p className="text-red-500">{error}</p>
      </ComponentLayout>
    );
  if (!weatherData)
    return (
      <ComponentLayout>
        <p>Loading...</p>
      </ComponentLayout>
    );

  return (
    <ComponentLayout>
      <div>
        <div className="mb-2">
          <h6 className="mb-1 text-2xl font-bold text-neutral-800">
            Current Weather
          </h6>

          <div className="flex gap-6">
            <div className="flex-col">
              <p className="text-4xl font-medium text-neutral-800">
                {Math.round(weatherData.current.temperature_2m)}°C
              </p>
              <p className="text-2xl text-gray-600">
                {getWeatherDescription(weatherData.current.cloud_cover)}
              </p>
            </div>
            <div className="-pt-12">
              {weatherData.current.cloud_cover < 20 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="96"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 5q-.425 0-.713-.288T11 4V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5Zm4.95 2.05q-.275-.275-.275-.687t.275-.713l1.4-1.425q.3-.3.712-.3t.713.3q.275.275.275.7t-.275.7L18.35 7.05q-.275.275-.7.275t-.7-.275ZM20 13q-.425 0-.713-.288T19 12q0-.425.288-.713T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-2ZM12 23q-.425 0-.713-.288T11 22v-2q0-.425.288-.713T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275t.7.275L7.05 5.65q.275.275.275.7t-.275.7q-.275.275-.687.275t-.713-.275Zm12.7 12.725l-1.4-1.425q-.275-.3-.275-.713t.275-.687q.275-.275.688-.275t.712.275l1.425 1.4q.3.275.3.7t-.3.725q-.275.275-.7.275t-.725-.275ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13H2Zm2.225 6.775q-.275-.275-.275-.7t.275-.7L5.65 16.95q.275-.275.688-.275t.712.275q.275.275.275.688t-.275.712l-1.4 1.425q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"
                  />
                </svg>
              ) : weatherData.current.cloud_cover < 50 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="96"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.74 5.47c2.05 0 3.71 1.67 3.71 3.71c0 .25-.03.5-.08.74c.03 0 .06-.01.09-.01c2.32 0 4.2 1.88 4.2 4.2c0 2.32-1.88 4.2-4.2 4.2H6.5c-2.49 0-4.5-2.01-4.5-4.5c0-2.48 2.02-4.5 4.5-4.5c.67 0 1.29.15 1.86.41c.01-.13.03-.26.03-.39c0-2.04 1.66-3.71 3.71-3.71m0-2c-3.15 0-5.71 2.56-5.71 5.71c0 .21.01.42.03.63A6.495 6.495 0 0 0 6.5 9c-3.58 0-6.5 2.92-6.5 6.5S2.92 22 6.5 22h9.75c3.45 0 6.25-2.8 6.25-6.25c0-3.45-2.8-6.25-6.25-6.25c-.06 0-.11.01-.17.01c.13-.57.17-1.17.17-1.75c0-3.15-2.56-5.71-5.71-5.71m.29 5.17L7.45 14.22L9 15.77l3.32-3.32l2.78 2.78l1.41-1.41l-4.18-4.18z"
                  />
                </svg>
              ) : weatherData.current.cloud_cover < 80 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="96"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.5 20q-2.275 0-3.888-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.313 3.188T18.5 20h-12Zm0-2h12q1.05 0 1.775-.725T21 15.5q0-1.05-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6Q9.925 6 8.463 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5q0 1.45 1.025 2.475T6.5 18Zm5.5-6Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="96"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.5 20q-2.275 0-3.888-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.313 3.188T18.5 20h-12Z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        <p className="text-xl text-neutral-800">
          {weatherData.current.cloud_cover > 50
            ? "Consider waiting for weather to improve before using energy."
            : "Great weather for solar energy, use it to power your home."}
        </p>
      </div>
    </ComponentLayout>
  );
};

export default WeatherForecast;
