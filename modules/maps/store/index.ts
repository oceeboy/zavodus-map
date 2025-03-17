import { create } from "zustand";
import { FullLocationData } from "../types";
import { generateNearbyLocations } from "@/utils";

interface LocationStore {
  locations: FullLocationData[];
  setLocations: (latitude: number, longitude: number, total: number) => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
  locations: [],
  setLocations: (latitude, longitude, total) => {
    const newLocations = generateNearbyLocations(latitude, longitude, total);
    set({ locations: newLocations });
  },
}));
