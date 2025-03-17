import { CircleLayer, Images, ShapeSource, SymbolLayer } from "@rnmapbox/maps";
import { featureCollection, point } from "@turf/helpers";
import { OnPressEvent } from "@rnmapbox/maps/lib/typescript/src/types/OnPressEvent";
import { pin } from "../constants/images";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { NavigationDetails } from "./NavigationDetails";
import { useMap } from "../providers/MapProvider";
import { useLocationStore } from "../store";

interface MarkerDetailsProps {
  longitude: number;
  latitude: number;
}

export function MarkerDetails({ longitude, latitude }: MarkerDetailsProps) {
  const { locations, setLocations } = useLocationStore();
  const { destination, setDestination } = useMap();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    if (locations.length === 0) {
      setLocations(latitude, longitude, 7);
    }
  }, [latitude, longitude]);
  const mainPointsData = locations.map((locations) =>
    point([locations.longitude, locations.latitude], { locations })
  );

  const dataFeatures = featureCollection(mainPointsData);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  function getEventDetails(event: OnPressEvent) {
    if (
      event.features[0] &&
      event.features[0].properties &&
      event.features[0].properties.locations
    ) {
      setDestination(event.features[0].properties.locations);

      handlePresentModalPress();
    }
  }

  return (
    <>
      <ShapeSource
        cluster
        id="marker-source"
        shape={dataFeatures}
        onPress={(e) => getEventDetails(e)}
      >
        <SymbolLayer
          id="clusters-count"
          style={{
            textField: ["get", "point_count"],
            textSize: 16,
            textColor: "#fff",
            textPitchAlignment: "map",
          }}
        />
        <CircleLayer
          id="clusters"
          belowLayerID="clusters-count"
          filter={["has", "point_count"]}
          style={{
            circlePitchAlignment: "map",
            circleColor: "orange",
            circleRadius: 10,
            circleStrokeColor: "white",
            circleStrokeWidth: 2,
            circleOpacity: 0.7,
          }}
        />
        <SymbolLayer
          id="marker-layer"
          filter={["!", ["has", "point_count"]]}
          style={{
            iconImage: "pin",
            iconSize: 0.2,
            iconAllowOverlap: false,
            iconAnchor: "bottom",
          }}
        />
        <Images images={{ pin }} />
      </ShapeSource>
      <BottomSheetModal ref={bottomSheetModalRef}>
        <BottomSheetView style={styles.contentContainer}>
          <NavigationDetails />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    height: 300,
    alignItems: "center",
  },
});
