import Mapbox, { Camera, LocationPuck, MapView } from "@rnmapbox/maps";
import { useTheme } from "@/providers/ThemeProvider";
import { MarkerDetails } from "./MarkerDetails";
import { DirectionDetails } from "./DirectionsDetails";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Alert, ActivityIndicator, View, Text } from "react-native";

Mapbox.setAccessToken(`${process.env.EXPO_PUBLIC_ACCESS_TOKEN}`);

export function Maps() {
  const { theme } = useTheme();
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

  return (
    <MapView style={{ flex: 1 }} styleURL="mapbox://styles/mapbox/dark-v11">
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
