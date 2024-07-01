import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

interface HourlyForecast {
  time: string;
  temperature_2m: number;
  cloud_cover: number;
}

interface ForecastData {
  hourly: HourlyForecast[];
}

const API_URL = "https://api.open-meteo.com/v1/forecast";

const WeatherForecast: React.FC = () => {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await axios.get<ForecastData>(API_URL, {
          params: {
            latitude: 52.52,
            longitude: 13.41,
            hourly: "temperature_2m,cloud_cover",
            forecast_days: 1,
          },
        });
        console.log("API response:", response.data); // Log response to inspect structure
        setForecastData(response.data);
      } catch (error) {
        console.error("Error fetching forecast:", error);
      }
    };

    fetchForecast();
  }, []);

  return (
    /*
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Hourly Weather Forecast
          </h5>
        </div>
      </div>

      <div className="mb-2">
        {forecastData && forecastData.hourly ? (
          <div id="chartForecast" className="mx-auto flex justify-center">
            <ReactApexChart
              type="line"
              height={350}
              series={[
                {
                  name: "Temperature",
                  data: forecastData.hourly.map((hour) => ({
                    x: hour.time,
                    y: hour.temperature_2m,
                  })),
                },
              ]}
              options={{
                xaxis: {
                  type: "datetime",
                  labels: {
                    datetimeFormatter: {
                      year: "yyyy",
                      month: "MMM 'yy",
                      day: "dd MMM",
                      hour: "HH:mm",
                    },
                  },
                },
                colors: ["#3C50E0"],
                stroke: {
                  curve: "smooth",
                },
                tooltip: {
                  x: {
                    format: "dd MMM HH:mm",
                  },
                },
                grid: {
                  borderColor: "#f1f1f1",
                },
              }}
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        {forecastData && forecastData.hourly ? (
          forecastData.hourly.map((hour, index) => (
            <div key={index} className="w-full px-8 sm:w-1/2">
              <div className="flex w-full items-center">
                <span
                  className={`mr-2 block h-3 w-full max-w-3 rounded-full bg-blue-500`}
                ></span>
                <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                  <span> {hour.time} </span>
                  <span>
                    {" "}
                    {hour.temperature_2m}°C, {hour.cloud_cover}%{" "}
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No hourly forecast data available.</p>
        )}
      </div>
    </div>
  );
};
*/
    <div>"Hello"</div>
  );
};

export default WeatherForecast;
