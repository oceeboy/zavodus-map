import { THEME } from "@/constants/theme";
import { useTheme } from "@/providers/ThemeProvider";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, View, StyleSheet } from "react-native";
import { Text } from "react-native";
import Animated, { BounceIn, FlipOutEasyX } from "react-native-reanimated";

export default function Index() {
  const router = useRouter();
  const { theme } = useTheme();

  function goNextPage() {
    router.push("/stacks/maps/maps-screen");
  }

  return (
    <View style={styles.container}>
      <Animated.View entering={BounceIn} exiting={FlipOutEasyX}>
        <Text style={styles.title}>Welcome to Zavodus Map</Text>
      </Animated.View>
      <Text style={styles.subtitle}>
        Discover nearby places, get directions, and connect easily!
      </Text>

      <View style={styles.featuresContainer}>
        <View style={styles.feature}>
          <Ionicons name="chatbox" size={24} color={theme.BUTTON.PRIMARY} />
          <Text style={styles.featureText}>Support Chat</Text>
        </View>
        <View style={styles.feature}>
          <MaterialIcons
            name="navigation"
            size={24}
            color={theme.BUTTON.PRIMARY}
          />
          <Text style={styles.featureText}>Navigation</Text>
        </View>
        <View style={styles.feature}>
          <Ionicons name="person" size={24} color={theme.BUTTON.PRIMARY} />
          <Text style={styles.featureText}>Profile</Text>
        </View>
      </View>

      <Pressable
        onPress={goNextPage}
        style={[styles.button, { backgroundColor: theme.BUTTON.PRIMARY }]}
      >
        <Ionicons name="map-outline" size={24} color={"white"} />
        <Text style={styles.buttonText}>Start Exploring</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F4F4F4",
  },
  title: {
    fontSize: THEME.FONT_SIZE.XLARGE,
    fontFamily: THEME.FONT_FAMILY.DISPLAY.BLACK,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 40,
    textAlign: "center",
    fontFamily: THEME.FONT_FAMILY.DISPLAY.REGULAR,
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 40,
  },
  feature: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    gap: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
    fontFamily: THEME.FONT_FAMILY.DISPLAY.SEMIBOLD,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 2,
    flexDirection: "row",
    gap: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
