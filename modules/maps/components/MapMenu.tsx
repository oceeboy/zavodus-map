import React, { useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { BlurView } from "expo-blur";
import { MapStyleType } from "../types";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useMap } from "../providers/MapProvider";

interface MapMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const mapStyles: MapStyleType[] = [
  "Standard",
  "Satellite",
  "Streets",
  "Light",
  "Dark",
  "Outdoors",
  "Navigation",
];

export function MapMenu({ isOpen, onToggle }: MapMenuProps) {
  const { mapStyle, setMapStyle } = useMap();
  const height = useSharedValue(50);
  const opacity = useSharedValue(0);

  useEffect(() => {
    height.value = withSpring(isOpen ? 250 : 50, {
      damping: 15,
      stiffness: 120,
    });
    opacity.value = withSpring(isOpen ? 1 : 0);
  }, [isOpen, height, opacity]);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  const animatedOpacityStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const handleStyleChange = (style: MapStyleType) => {
    setMapStyle(style);
  };

  return (
    <>
      {isOpen && (
        <TouchableWithoutFeedback onPress={onToggle}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 99,
            }}
          />
        </TouchableWithoutFeedback>
      )}
      <View style={{ position: "absolute", bottom: 50, left: 20, zIndex: 100 }}>
        <Animated.View
          style={[
            {
              width: 180,
              borderRadius: 20,
              overflow: "hidden",
            },
            animatedContainerStyle,
          ]}
        >
          <BlurView
            intensity={90}
            tint="dark"
            style={{
              flex: 1,
              padding: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={onToggle} style={{ marginBottom: 15 }}>
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                Close
              </Text>
            </TouchableOpacity>
            <Animated.View style={[animatedOpacityStyle, { flex: 1 }]}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ maxHeight: 170 }}
                keyboardShouldPersistTaps="handled"
              >
                {mapStyles.map((style) => {
                  const isSelected = mapStyle === style;
                  return (
                    <TouchableOpacity
                      key={style}
                      onPress={() => handleStyleChange(style)}
                      style={{
                        backgroundColor: isSelected
                          ? "rgba(255,255,255,0.5)"
                          : "rgba(255,255,255,0.2)",
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        marginBottom: 8,
                        borderRadius: 8,
                        alignItems: "center",
                        width: "100%",
                        borderWidth: isSelected ? 2 : 0,
                        borderColor: isSelected ? "white" : "transparent",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          color: isSelected ? "#000" : "#fff",
                        }}
                      >
                        {style}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </Animated.View>
          </BlurView>
        </Animated.View>
      </View>
    </>
  );
}
