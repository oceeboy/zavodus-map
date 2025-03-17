import { Alert, StyleSheet, View } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProfileSchema } from "../validation/create-profile.schema";

import { CreateProfileSchema } from "../types/profile";
import { Button, FormField } from "@/components/shared";

export function ProfileForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateProfileSchema>({
    resolver: zodResolver(createProfileSchema),
  });

  function createProfile(data: CreateProfileSchema) {
    Alert.alert(
      `First name: ${data.firstName}\n Last name: ${data.lastName}\n Email: ${data.email}`
    );
    setTimeout(() => reset(), 1000);
  }

  return (
    <View style={styles.formContainer}>
      <FormField
        control={control}
        name="firstName"
        label="First Name"
        placeholder="Enter your first name"
        errorMessage={errors.firstName?.message}
      />
      <FormField
        control={control}
        name="lastName"
        label="Last Name"
        placeholder="Enter your Last name"
        errorMessage={errors.lastName?.message}
      />
      <FormField
        control={control}
        name="email"
        label="Email"
        placeholder="Enter your Email Address"
        errorMessage={errors.email?.message}
      />
      <Button
        title="Create Profile"
        onPress={handleSubmit(createProfile)}
        containerStyle={styles.formButton}
        textStyle={{}}
        current_state="Active"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    gap: 10,
  },
  formButton: {
    height: 50,
  },
});
