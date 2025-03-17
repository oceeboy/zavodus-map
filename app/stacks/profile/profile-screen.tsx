import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";

import React from "react";
import { Profile } from "@/modules/profile";
import { Header } from "@/components/shared";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Header title="Profile Screen" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <Profile />
      </KeyboardAvoidingView>
    </View>
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
