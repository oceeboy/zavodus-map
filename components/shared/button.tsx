import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import { THEME } from "../../constants/theme";
import { useTheme } from "@/providers/ThemeProvider";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  current_state: "Active" | "Disabled" | "Outline";
}

/**
 * Button component is a reusable component to help make the codebase clean
 * @param param0
 * @returns {React.ReactElement} An Adjustable component
 * @example
 * import { Button } from './Button';
 * function yourUsage() {
 *   return (
 *     <Button
 *       title="Submit"
 *       onPress={() => {}}
 *       containerStyle={{}}
 *       textStyle={{}}
 *       current_state="Active"
 *     />
 *   );
 * }
 */

const Button = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  current_state,
}: ButtonProps): React.ReactElement => {
  const isDisabled = current_state === "Disabled";
  const isOutline = current_state === "Outline";

  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[
        containerStyle,
        { backgroundColor: theme.BUTTON.PRIMARY },
        styles.container,
        isOutline && {
          backgroundColor: theme.primary,
          borderColor: theme.BUTTON.PRIMARY,
          borderWidth: 1,
        },
        isDisabled && { backgroundColor: theme.colors.inactive },
      ]}
      onPress={!isDisabled ? onPress : undefined}
      disabled={isDisabled}
    >
      <Text
        style={[
          textStyle,
          {
            color: theme.colors.white,
            fontFamily: THEME.FONT_FAMILY.TEXT.SEMIBOLD,
            fontSize: THEME.FONT_SIZE.h3,
          },
          isOutline && { color: theme.BUTTON.PRIMARY },
          isDisabled && { color: theme.colors.inactive },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
