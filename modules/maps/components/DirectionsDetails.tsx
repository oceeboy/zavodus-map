import React from "react";

import { LineLayer, ShapeSource } from "@rnmapbox/maps";

import { useTheme } from "@/providers/ThemeProvider";
import { useMap } from "../providers/MapProvider";

export function DirectionDetails() {
  const { theme } = useTheme();
  const { directionCoordinate } = useMap();
  return (
    <>
      {directionCoordinate && (
        <ShapeSource
          id="routeSource"
          shape={{
            properties: {},
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: directionCoordinate,
            },
          }}
        >
          <LineLayer
            id="exampleLineLayer"
            style={{
              lineWidth: 2,
              lineCap: "round",
              lineJoin: "round",
              lineColor: theme.colors.green,
            }}
          />
        </ShapeSource>
      )}
    </>
  );
}
