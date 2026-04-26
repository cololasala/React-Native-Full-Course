import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionsDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 items-center alin justify-center">
      <Text>SubscriptionsDetail: {id}</Text>
      <Link href={"/"} className="text-lg font-sans-regular text-primary">
        Go back
      </Link>
    </View>
  );
};

export default SubscriptionsDetail;
