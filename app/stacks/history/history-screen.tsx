import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import React from "react";
import { History } from "@/modules/history";
import { useTheme } from "@/providers/ThemeProvider";
import { Header } from "@/components/shared";
export default function HistoryScreen() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.primary,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <Header title="History" />
      <History />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
