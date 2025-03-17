import React from "react";
import { MapDrawer, Maps } from "@/modules/maps";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MapScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Maps />

      <View
        style={{
          position: "absolute",
          top: insets.top,
          left: insets.left,
          right: insets.right,
          width: "90%",
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: insets.top,
            marginStart: 16,
          }}
        >
          <MapDrawer />
        </View>
      </View>
    </View>
  );
}
