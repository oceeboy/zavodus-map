import { SectionList, StyleSheet, Text, View } from "react-native";
import { HistoryItem } from "./HistoryItem";
import { history } from "../constants";
import { groupByMonth } from "../services";

export function History() {
  const sections = groupByMonth(history);
  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HistoryItem {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>{title}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        indicatorStyle="black"
        stickySectionHeadersEnabled={true}
        scrollIndicatorInsets={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
    marginTop: 15,
    marginBottom: 5,
  },
  sectionHeaderContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
