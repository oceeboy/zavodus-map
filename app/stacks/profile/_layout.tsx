import { Slot } from "expo-router";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function ProfileLayout() {
  return (
    <BottomSheetModalProvider>
      <Slot />
    </BottomSheetModalProvider>
  );
}
