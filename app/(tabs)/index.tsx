import { Link } from "expo-router";
import { Text } from "react-native";
// import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
// const SafeAreaView = styled(RNSafeAreaView)`

const Index = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-sans-bold text-accent">
        Welcome to NativeWind!
      </Text>
      <Link
        href={"/Onboarding"}
        className="text-lg font-sans-regular text-primary"
      >
        Go to onboarding
      </Link>
      <Link
        href={"/(auth)/SignIn"}
        className="text-lg font-sans-regular text-primary"
      >
        Go to SignIn
      </Link>
      <Link
        href={"/(auth)/SignUp"}
        className="text-lg font-sans-regular text-primary"
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
