import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Onboarding = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Onboarding</Text>
      <Link
        href={"/"}
        className="text-lg font-sans-regular text-primary"
        onPress={() => console.log("Go to home")}
      >
        Go to home
      </Link>
    </View>
  );
};

export default Onboarding;
