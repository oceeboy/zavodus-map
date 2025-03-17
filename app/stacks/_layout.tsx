import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { useTheme } from "@/providers/ThemeProvider";
import { THEME } from "@/constants/theme";

export default function StacksLayout() {
  const { theme } = useTheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerPosition: "left",
          drawerType: "slide",
          drawerActiveTintColor: theme.BUTTON.PRIMARY,
          drawerInactiveTintColor: theme.colors.dark,

          drawerStyle: {
            width: 300,
            backgroundColor: theme.primary,
            padding: 20,
          },
        }}
      >
        <Drawer.Screen
          name="maps"
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="map-outline" size={size} color={color} />
            ),
            drawerLabel: ({ color }) => (
              <Text
                style={{
                  color,
                  fontSize: THEME.FONT_SIZE.MEDIUM,
                  fontFamily: THEME.FONT_FAMILY.DISPLAY.SEMIBOLD,
                }}
              >
                Maps
              </Text>
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
            drawerLabel: ({ color }) => (
              <Text style={{ color, fontSize: 16 }}>Profile</Text>
            ),
          }}
        />
        <Drawer.Screen
          name="history"
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="time-outline" size={size} color={color} />
            ),
            drawerLabel: ({ color }) => (
              <Text style={{ color, fontSize: 16 }}>History</Text>
            ),
          }}
        />
        <Drawer.Screen
          name="support"
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="help-circle-outline" size={size} color={color} />
            ),
            drawerLabel: ({ color }) => (
              <Text style={{ color, fontSize: 16 }}>Support</Text>
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
