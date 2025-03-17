import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { Pressable } from "react-native";

import { useTheme } from "@/providers/ThemeProvider";

export function MapDrawer() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  function openDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }
  return (
    <Pressable
      style={{
        backgroundColor: theme.BUTTON.PRIMARY,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
      }}
      onPress={openDrawer}
    >
      <Ionicons name="menu" size={24} color={theme.colors.white} />
    </Pressable>
  );
}
