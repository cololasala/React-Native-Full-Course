import { Link } from "expo-router";
import { Text } from "react-native";
// import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
// const SafeAreaView = styled(RNSafeAreaView)`

const Index = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-5xl font-sans-extrabold">Home</Text>

      <Link
        href={"/Onboarding"}
        className="mt-4 fonts-sans-bold rounded bg-primary text-white p-4"
      >
        Go to onboarding
      </Link>
      <Link
        href={"/(auth)/SignIn"}
        className="mt-4 fonts-sans-bold rounded bg-primary text-white p-4"
      >
        Go to SignIn
      </Link>
      <Link
        href={"/(auth)/SignUp"}
        className="mt-4 fonts-sans-bold rounded bg-primary text-white p-4"
      >
        Go to SignUp
      </Link>
      <Link
        href={"/Subcriptions/123"}
        className="text-lg font-sans-regular text-primary"
      >
        Spotify Subscriptions
      </Link>
    </SafeAreaView>
  );
};

export default Index;
