import { Header } from "@/components/shared";
import { Support } from "@/modules/support";
import { useTheme } from "@/providers/ThemeProvider";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";

export default function SupportScreen() {
  const { theme } = useTheme();
  return (
    <>
      <View style={{ flex: 1, backgroundColor: theme.primary }}>
        <Header title="Support Chat" />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardContainer}
        >
          <Support />
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardContainer: {
    flex: 1,
  },
});
