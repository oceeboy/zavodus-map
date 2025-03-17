import { THEME } from "@/constants/theme";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
  title: string;
}

export default function Header({ title = "header" }: HeaderProps) {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }}>
      <View
        style={{
          padding: 16,
        }}
      >
        <Text
          style={{
            fontSize: THEME.FONT_SIZE.XLARGE,
            fontFamily: THEME.FONT_FAMILY.DISPLAY.BOLD,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
