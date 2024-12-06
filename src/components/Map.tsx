"use client";
import React, { useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface SolarApiResponse {
  yearlyEnergyDcKwh: number;
}

const Map: React.FC = () => {
  const [selectedBuildings, setSelectedBuildings] = useState<string[]>([]);
  const [calculatingSolar, setCalculatingSolar] = useState(false);
  const [currentValue, setCurrentValue] = useState<number>(30);
  const [solarData, setSolarData] = useState<SolarApiResponse | null>(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style: "https://tiles.openfreemap.org/styles/bright",
      center: [-1.2982167, 50.7029],
      zoom: 16,
    });

    map.on("load", () => {
      // Load GeoJSON file
      fetch("/buildings.geojson")
        .then((response) => response.json())
        .then((data) => {
          map.addSource("custom-data", {
            type: "geojson",
            data: data,
          });

          map.addLayer({
            id: "custom-layer",
            type: "fill-extrusion",
            source: "custom-data",
            paint: {
              "fill-extrusion-color": [
                "case",
                ["in", ["get", "osm_id"], ["literal", selectedBuildings]],
                "green",
                "red",
              ],
              "fill-extrusion-height": 5,
              "fill-extrusion-base": 0,
              "fill-extrusion-opacity": 0.6,
            },
          });

          map.on("click", "custom-layer", (e) => {
            const features = map.queryRenderedFeatures(e.point, {
              layers: ["custom-layer"],
            });

            if (!features.length) {
              return;
            }

            setCalculatingSolar(true);
            const solarData = 10;
            const newValue = currentValue + solarData;
            setCurrentValue(newValue);

            setTimeout(() => {
              setCalculatingSolar(false);
            }, 4000);

            const clickedFeature = features[0];
            const clickedBuildingId = clickedFeature?.properties?.osm_id;

            setSelectedBuildings((prevSelectedBuildings) =>
              prevSelectedBuildings.includes(clickedBuildingId)
                ? prevSelectedBuildings.filter((id) => id !== clickedBuildingId)
                : [...prevSelectedBuildings, clickedBuildingId],
            );
          });
        })
        .catch((error) => {
          console.error("Error loading GeoJSON:", error);
        });
    });

    return () => map.remove();
  }, [selectedBuildings, currentValue]);

  return (
    <>
      {calculatingSolar && (
        <div className="popup absolute left-0 z-40 flex h-[100%] w-[100%] justify-center bg-neutral-50 p-10">
          <div className="text-center">
            <p className="py-10 text-4xl font-bold text-black">
              <svg
                className="mx-auto mb-5 h-10 w-10 animate-spin text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Calculating solar potential...
            </p>
          </div>
        </div>
      )}
      <div id="map" style={{ height: "50rem", width: "80%" }} />
    </>
  );
};

export default Map;
