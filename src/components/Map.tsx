import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

// Replace 'your_mapbox_access_token' with your actual Mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9uZXM1ODEiLCJhIjoiY2xwNzM4Y3JpMXZ1NjJrcWswNDFrbnl1ZiJ9.Ud2Oqbe9kgEmB3U3UOH98w";

const MapboxMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11", // Style of the map
        center: [-1.2982167, 50.7029], // Initial map center in [lng, lat]
        zoom: 18, // Initial zoom level
      });

      map.on("load", () => {
        // Load GeoJSON file
        fetch("/buildings.geojson")
          .then((response) => response.json())
          .then((data) => {
            // Add GeoJSON data as a source
            map.addSource("custom-data", {
              type: "geojson",
              data: data,
            });

            // Add a layer to display the building GeoJSON data as 3D extrusions
            map.addLayer({
              id: "custom-layer",
              type: "fill-extrusion",
              source: "custom-data",
              paint: {
                // Use a property-driven color expression
                "fill-extrusion-color": [
                  "case",
                  ["==", ["get", "color"], "red"],
                  "#ae493f", // Red color
                  ["==", ["get", "color"], "green"],
                  "#4caf50", // Green color
                  "#ccc", // Default color (shouldn't actually be used)
                ],
                "fill-extrusion-height": 5, // Height of the building
                "fill-extrusion-base": 0, // Base height of the building
                "fill-extrusion-opacity": 0.6, // Opacity of the building
              },
            });

            // Add click event listener to toggle building color
            map.on("click", "custom-layer", (e) => {
              const features = map.queryRenderedFeatures(e.point, {
                layers: ["custom-layer"],
              });

              if (!features.length) {
                return;
              }

              const feature = features[0];
              const currentColor = feature.properties.color;

              // Toggle color on click
              const newColor = currentColor === "red" ? "green" : "red";

              // Update GeoJSON source
              const updatedData = {
                ...data,
                features: data.features.map((f) =>
                  f.properties.id === feature.properties.id
                    ? {
                        ...f,
                        properties: {
                          ...f.properties,
                          color: newColor,
                        },
                      }
                    : f,
                ),
              };

              map.getSource("custom-data").setData(updatedData);
            });
          })
          .catch((error) => {
            console.error("Error loading GeoJSON:", error);
          });
      });

      // Clean up on unmount
      return () => map.remove();
    }
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "400px" }} />
  );
};

export default MapboxMap;
