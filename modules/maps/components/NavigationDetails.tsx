import { THEME } from "@/constants/theme";
import { useTheme } from "@/providers/ThemeProvider";
import { metersToDistance, secondsToTime } from "@/utils";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMap } from "../providers/MapProvider";

export function NavigationDetails() {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const { details, routeDistance, routeTime } = useMap();

  const safeRouteTime = Number.isFinite(routeTime)
    ? secondsToTime(routeTime)
    : "N/A";
  const safeRouteDistance = Number.isFinite(routeDistance)
    ? metersToDistance(routeDistance, 2)
    : "N/A";
  const isValid = details?.name && routeDistance && routeTime;

  return (
    <View style={styles.navigationContainer}>
      <View style={{ flexDirection: "column", gap: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: THEME.FONT_FAMILY.DISPLAY.BOLD,
                fontSize: THEME.FONT_SIZE.MEDIUM,
                flexWrap: "wrap",
              }}
            >
              Estimated Time
            </Text>
            <Text
              style={{
                fontFamily: THEME.FONT_FAMILY.DISPLAY.BOLD,
                fontSize: THEME.FONT_SIZE.MEDIUM,
                flexWrap: "wrap",
              }}
            >
              {safeRouteTime}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: THEME.FONT_FAMILY.DISPLAY.BOLD,
                fontSize: THEME.FONT_SIZE.MEDIUM,
                flexWrap: "wrap",
              }}
            >
              Duration
            </Text>

            <Text
              style={{
                fontFamily: THEME.FONT_FAMILY.DISPLAY.BOLD,
                fontSize: THEME.FONT_SIZE.MEDIUM,
              }}
            >
              {safeRouteDistance}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text
            style={{
              fontFamily: THEME.FONT_FAMILY.ROUNDED.MEDIUM,
              fontSize: THEME.FONT_SIZE.MEDIUM,
            }}
          >
            Location: {details?.name || "Unknown Place"}
          </Text>

          <Text
            style={{
              fontFamily: THEME.FONT_FAMILY.ROUNDED.MEDIUM,
              fontSize: THEME.FONT_SIZE.MEDIUM,
            }}
          >
            Address: {details?.full_address || "No address available"}{" "}
          </Text>
        </View>
      </View>
      <View style={{ paddingBottom: insets.bottom }}>
        <Pressable
          disabled={!isValid}
          style={({ pressed }) => [
            {
              padding: 10,
              backgroundColor: isValid ? theme.BUTTON.PRIMARY : "gray",
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              opacity: pressed ? 0.8 : 1,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="navigation" size={24} color="white" />
            <Text
              style={{
                color: "white",
                fontSize: THEME.FONT_SIZE.MEDIUM,
                fontFamily: THEME.FONT_FAMILY.DISPLAY.BOLD,
              }}
            >
              Navigate
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    width: "100%",
    height: "100%",
    padding: 16,
    justifyContent: "space-between",
  },
});
