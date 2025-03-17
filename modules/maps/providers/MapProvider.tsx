import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import * as location from "expo-location";
import { FeatureProperties, FullLocationData, RouteData } from "../types";
import { getDirection, getGeocoding } from "../services/direction.service";

interface MapContextType {
  userLocation: any;
  direction: RouteData | null;
  directionCoordinate: any;
  destination: FullLocationData | null;
  routeTime: any;
  routeDistance: any;
  details: FeatureProperties | null;
  setUserLocation: React.Dispatch<React.SetStateAction<any>>;
  setDirection: React.Dispatch<React.SetStateAction<RouteData | null>>;
  setDirectionCoordinate: React.Dispatch<React.SetStateAction<any>>;
  setDestination: React.Dispatch<React.SetStateAction<FullLocationData | null>>;
  setRouteTime: React.Dispatch<React.SetStateAction<any>>;
  setRouteDistance: React.Dispatch<React.SetStateAction<any>>;
  setDetails: React.Dispatch<React.SetStateAction<FeatureProperties | null>>;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

const MapProvider = ({ children }: PropsWithChildren) => {
  const [userLocation, setUserLocation] = useState<any>(null);
  const [direction, setDirection] = useState<RouteData | null>(null);
  const [directionCoordinate, setDirectionCoordinate] = useState<any>(null);
  const [destination, setDestination] = useState<FullLocationData | null>(null);
  const [routeTime, setRouteTime] = useState<any>(null);
  const [routeDistance, setRouteDistance] = useState<any>(null);
  const [details, setDetails] = useState<any>(null);

  const lastFetchedDestination = useRef<{
    longitude: number;
    latitude: number;
  } | null>(null);

  // Fetch route direction when destination changes
  useEffect(() => {
    const fetchDirection = async () => {
      const userCurrentLocation = await location.getCurrentPositionAsync();

      const newDirection: RouteData = await getDirection(
        [
          userCurrentLocation.coords.longitude,
          userCurrentLocation.coords.latitude,
        ],
        [destination?.longitude ?? 0, destination?.latitude ?? 0]
      );
      setUserLocation(userCurrentLocation);
      setDirection(newDirection);
      setDirectionCoordinate(newDirection.routes?.[0]?.geometry?.coordinates);
      setRouteTime(newDirection.routes?.[0].duration);
      setRouteDistance(newDirection.routes?.[0].distance);
    };

    if (destination) {
      fetchDirection();
    }
  }, [destination]);

  // Fetch geocoding details when destination changes
  useEffect(() => {
    async function fetchDetails() {
      if (
        destination &&
        (!lastFetchedDestination.current ||
          lastFetchedDestination.current.longitude !== destination.longitude ||
          lastFetchedDestination.current.latitude !== destination.latitude)
      ) {
        try {
          lastFetchedDestination.current = destination;
          const data = await getGeocoding(
            destination.longitude,
            destination.latitude
          );
          setDetails(data);
        } catch (error) {
          console.error("Error fetching geocoding details:", error);
        }
      }
    }
    fetchDetails();
  }, [destination]);

  return (
    <MapContext.Provider
      value={{
        userLocation,
        direction,
        directionCoordinate,
        destination,
        routeTime,
        routeDistance,
        details,
        setUserLocation,
        setDirection,
        setDirectionCoordinate,
        setDestination,
        setRouteTime,
        setRouteDistance,
        setDetails,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

const useMap = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
};

export { MapProvider, useMap };
