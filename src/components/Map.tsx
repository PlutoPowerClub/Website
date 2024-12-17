"use client";
import React, { useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import ComponentLayout from "./componentLayout";
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
      dragRotate: false,
      touchZoomRotate: true,
      maxZoom: 18,
      minZoom: 14,
    });

    // Add map controls for better mobile interaction
    map.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right",
    );
    map.addControl(
      new maplibregl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
      }),
    );

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
    <ComponentLayout className="w-full p-0">
      {calculatingSolar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="border-mx-4 border-stroke max-w-sm rounded-2xl border bg-neutral-50 p-6 text-center shadow-xl">
            <svg
              className="mx-auto h-12 w-12 animate-spin text-green-600"
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
            <p className="mt-4 text-xl font-semibold text-neutral-800">
              Calculating solar potential...
            </p>
          </div>
        </div>
      )}

      <div
        id="map"
        className="h-[calc(100vh-12rem)] w-full overflow-hidden rounded-xl sm:h-full"
        style={{
          touchAction: "pan-x pan-y",
        }}
      />
    </ComponentLayout>
  );
};

export default Map;
