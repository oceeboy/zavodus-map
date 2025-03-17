import { StyleSheet, Text, View } from "react-native";
import { HistoryItemProps } from "../types";
import { THEME } from "@/constants/theme";

export function HistoryItem({
  startLocation,
  endLocation,
  date,
  duration,
}: HistoryItemProps) {
  return (
    <View style={styles.historyItem}>
      <Text style={styles.locationText}>
        {startLocation} → {endLocation}
      </Text>
      <Text style={styles.dateText}>Date: {date}</Text>
      <Text style={styles.durationText}>Duration: {duration}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  historyItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
  },
  locationText: {
    fontSize: THEME.FONT_SIZE.MEDIUM,
    fontFamily: THEME.FONT_FAMILY.ROUNDED.BOLD,
    color: "#333",
  },
  dateText: {
    fontSize: THEME.FONT_SIZE.SMALL,
    fontFamily: THEME.FONT_FAMILY.TEXT.REGULAR,
    color: "#777",
    marginTop: 5,
  },
  durationText: {
    fontSize: THEME.FONT_SIZE.SMALL,
    fontFamily: THEME.FONT_FAMILY.TEXT.REGULAR,
    color: "#777",
    marginTop: 5,
  },
});
