import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>SignIn</Text>
      <Link href={"/"} className="text-lg font-sans-regular text-primary">
        Go to Tabs
      </Link>
    </View>
  );
};

export default SignIn;
