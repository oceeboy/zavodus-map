import React, { useState } from "react";
import { MapDrawer, MapMenu, Maps } from "@/modules/maps";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function MapScreen() {
  const insets = useSafeAreaInsets();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Maps />

      <View
        style={{
          position: "absolute",
          top: insets.top + 50,
          left: 16,
          zIndex: 100,
        }}
      >
        <MapDrawer />
      </View>
      {!isMenuOpen && (
        <View
          style={{
            position: "absolute",
            bottom: insets.bottom + 20,
            left: "50%",
            transform: [{ translateX: -50 }],
          }}
        >
          <TouchableOpacity
            onPress={() => setIsMenuOpen(true)}
            style={{
              backgroundColor: "white",
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderRadius: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Ionicons name="settings-outline" size={24} color={"black"} />
          </TouchableOpacity>
        </View>
      )}

      {isMenuOpen && (
        <MapMenu
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
        />
      )}
    </View>
  );
}
