import { MapProvider } from "@/modules/maps";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Slot } from "expo-router";

export default function MapsLayout() {
  return (
    <MapProvider>
      <BottomSheetModalProvider>
        <Slot />
      </BottomSheetModalProvider>
    </MapProvider>
  );
}
