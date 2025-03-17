import Mapbox, { Camera, LocationPuck, MapView } from "@rnmapbox/maps";
import { useTheme } from "@/providers/ThemeProvider";
import { MarkerDetails } from "./MarkerDetails";
import { DirectionDetails } from "./DirectionsDetails";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Alert, ActivityIndicator, View, Text } from "react-native";
import { useMap } from "../providers/MapProvider";
import { MapStyleType } from "../types";

Mapbox.setAccessToken(`${process.env.EXPO_PUBLIC_ACCESS_TOKEN}`);

export function Maps() {
  const { theme } = useTheme();
  const { mapStyle } = useMap();
  const [userLocation, setUserLocation] =
    useState<Location.LocationObject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Permission Denied",
            "Please allow location access in settings."
          );
          setLoading(false);
          return;
        }

        const locationResult = await Location.getCurrentPositionAsync({});
        setUserLocation(locationResult);
      } catch (error) {
        Alert.alert("Error", "Failed to fetch location. Try again.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  if (!userLocation || !userLocation.coords) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Location Error", "Unable to fetch your location.</Text>
      </View>
    );
  }

  const { longitude, latitude } = userLocation.coords;
  if (isNaN(longitude) || isNaN(latitude)) {
    Alert.alert("Invalid Location", "Coordinates are not valid.");
    return null;
  }

  const mapStyleURLs: Record<MapStyleType, string> = {
    Dark: "mapbox://styles/mapbox/dark-v11",
    Light: "mapbox://styles/mapbox/light-v11",
    Satellite: "mapbox://styles/mapbox/standard-satellite",
    Standard: "mapbox://styles/mapbox/standard",
    Streets: "mapbox://styles/mapbox/streets-v12",
    Navigation: "mapbox://styles/mapbox/navigation-day-v1",
    Outdoors: "mapbox://styles/mapbox/outdoors-v12",
  };

  const selectedStyle = mapStyle
    ? mapStyleURLs[mapStyle]
    : "mapbox://styles/mapbox/streets-v12";

  return (
    <MapView style={{ flex: 1, position: "relative" }} styleURL={selectedStyle}>
      <Camera
        followZoomLevel={10}
        followUserLocation
        centerCoordinate={[longitude, latitude]}
      />
      <LocationPuck
        puckBearingEnabled
        puckBearing="heading"
        pulsing={{ isEnabled: true, color: theme.primary }}
      />

      {/* Only render MarkerDetails when coordinates are valid */}
      <MarkerDetails longitude={longitude} latitude={latitude} />
      <DirectionDetails />
    </MapView>
  );
}
