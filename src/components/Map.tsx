import React, { useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface MapProps {
  updateOption1: (newValue: number) => void;
}

interface SolarApiResponse {
  yearlyEnergyDcKwh: number;
}

const Map: React.FC<MapProps> = ({ updateOption1 }) => {
  const [selectedBuildings, setSelectedBuildings] = useState<string[]>([]);
  const [calculatingSolar, setCalculatingSolar] = useState(false);
  const [currentValue, setCurrentValue] = useState<number>(30);
  const [solarData, setSolarData] = useState<SolarApiResponse | null>(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style: "https://tiles.openfreemap.org/styles/bright",
      center: [-1.2982167, 50.7029],
      zoom: 18,
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
            const solarData = 10; // Simulate solar potential calculation
            const newValue = currentValue + solarData;
            setCurrentValue(newValue);
            updateOption1(newValue);

            setTimeout(() => {
              setCalculatingSolar(false);
            }, 2000);

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
  }, [selectedBuildings, currentValue, updateOption1]);

  return (
    <>
      {calculatingSolar && (
        <div className="popup absolute left-0 top-20 z-40 h-[100%] w-[100%] bg-white">
          <p className="h-[100%] w-[100%] py-10 text-center text-2xl font-bold text-black">
            Calculating solar potential...
          </p>
        </div>
      )}
      <div id="map" style={{ height: "500px", width: "100%" }} />
    </>
  );
};

export default Map;
