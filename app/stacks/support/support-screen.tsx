import { Header } from "@/components/shared";
import { Support } from "@/modules/support";
import { useTheme } from "@/providers/ThemeProvider";
import { View } from "react-native";

export default function SupportScreen() {
  const { theme } = useTheme();
  return (
    <>
      <View style={{ flex: 1, backgroundColor: theme.primary }}>
        <Header title="Support Chat" />
        <Support />
      </View>
    </>
  );
}
