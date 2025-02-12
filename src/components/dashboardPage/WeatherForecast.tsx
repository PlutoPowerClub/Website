"use client";

import React, { useState, useEffect } from "react";
import ComponentLayout from "../componentLayout";

interface HourlyForecast {
  time: string;
  temperature_2m: number;
  cloud_cover: number;
}

interface ForecastData {
  hourly: HourlyForecast[];
  current: {
    time: string;
    temperature_2m: number;
    cloud_cover: number;
    weather_description: string;
  };
}

const dummyForecastData: ForecastData = {
  current: {
    time: "2024-07-01T12:00:00Z",
    temperature_2m: 10,
    cloud_cover: 20,
    weather_description: "Partly Cloudy",
  },
  hourly: [
    { time: "2024-07-01T13:00:00Z", temperature_2m: 24, cloud_cover: 20 },
    { time: "2024-07-01T14:00:00Z", temperature_2m: 25, cloud_cover: 15 },
    { time: "2024-07-01T15:00:00Z", temperature_2m: 26, cloud_cover: 10 },
    { time: "2024-07-01T16:00:00Z", temperature_2m: 27, cloud_cover: 5 },
    { time: "2024-07-01T17:00:00Z", temperature_2m: 28, cloud_cover: 0 },
    { time: "2024-07-01T18:00:00Z", temperature_2m: 27, cloud_cover: 5 },
    { time: "2024-07-01T19:00:00Z", temperature_2m: 26, cloud_cover: 10 },
    { time: "2024-07-01T20:00:00Z", temperature_2m: 25, cloud_cover: 15 },
    { time: "2024-07-01T21:00:00Z", temperature_2m: 24, cloud_cover: 20 },
    { time: "2024-07-01T22:00:00Z", temperature_2m: 23, cloud_cover: 25 },
  ],
};

const WeatherForecast: React.FC = () => {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);

  useEffect(() => {
    setForecastData(dummyForecastData);
  }, []);

  return (
    <ComponentLayout>
      {" "}
      {forecastData && forecastData.current ? (
        <div>
          <div className="mb-4">
            <h6 className="mb-2 text-3xl font-bold text-neutral-800">
              Current Weather
            </h6>

            <div className="flex gap-10">
              <div className="flex-col">
                <p className="text-4xl font-medium text-neutral-800">
                  {forecastData.current.temperature_2m}°C
                </p>
                <p className="text-2xl text-gray-600">
                  {forecastData.current.weather_description}
                </p>
              </div>
              <div className="-pt-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="96"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.002 8.013c3.168 0 4.966 2.097 5.227 4.63h.08a3.687 3.687 0 0 1 3.692 3.683a3.687 3.687 0 0 1-3.692 3.682H7.694a3.687 3.687 0 0 1-3.692-3.682a3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.06-4.63 5.228-4.63M6.589 4.005a5.06 5.06 0 0 1 2.263.674a5.06 5.06 0 0 1 2.208 2.595c-1.984.562-3.404 2.001-3.994 3.946l-.069.246l-.058.238l-.206.038a4.67 4.67 0 0 0-2.804 1.815a5.06 5.06 0 0 1-1.797-1.599a.75.75 0 0 1 .366-1.132c1.643-.588 2.527-1.25 3.034-2.216c.552-1.055.654-2.174.287-3.677a.75.75 0 0 1 .77-.928"
                  />
                </svg>
              </div>

              {/* TODO replace with this: <span className="icon-[fluent--weather-partly-cloudy-night-24-filled]"></span> */}
            </div>
          </div>
          {/* Fetch from endpoint here */}
          <p className="text-xl text-neutral-800">
            Consider waiting for weather to improve before using lots of energy.
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="mb-2">
        {forecastData && forecastData.hourly ? (
          <div id="chartForecast" className="mx-auto flex justify-center"></div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </ComponentLayout>
  );
};

export default WeatherForecast;
