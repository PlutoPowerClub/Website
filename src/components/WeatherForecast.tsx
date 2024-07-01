import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

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
    temperature_2m: 24,
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
    // Simulate fetching data by setting dummy data
    setForecastData(dummyForecastData);
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      {forecastData && forecastData.current ? (
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h6 className="text-lg font-medium text-black dark:text-white">
              Current Weather
            </h6>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Cloud Cover: {forecastData.current.cloud_cover}%
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-medium text-black dark:text-white">
              {forecastData.current.temperature_2m}°C
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {forecastData.current.weather_description}
            </p>
          </div>
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
    </div>
  );
};

export default WeatherForecast;
