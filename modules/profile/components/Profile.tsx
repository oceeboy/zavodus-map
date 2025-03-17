import { ScrollView, StyleSheet } from "react-native";
import React from "react";

import { ProfileForm } from "./ProfileForm";

export function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ProfileForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
});
