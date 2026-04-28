import ListHeading from "@/components/ListHeading";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import {
  HOME_BALANCE,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@react-navigation/elements";
import dayjs from "dayjs";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

const App = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
      >
        <View className="home-header">
          <View className="home-user w-full align-items-center justify-between">
            <Image source={images.avatar} className="home-avatar" />
            <Text className="home-user-name text-lg/6 w-40">
              {HOME_USER.name}
            </Text>
            <Image
              source={icons.add}
              className="home-add-icon border border-gray-400 rounded-full"
            />
          </View>
        </View>
        <Button onPress={() => alert("Button Pressed")}> test </Button>
        <View className="home-balance-card">
          <Text className="home-balance-label">Balance</Text>

          <View className="home-balance-row">
            <Text className="home-balance-amount">
              {formatCurrency(HOME_BALANCE.amount)}
            </Text>
            <Text className="home-balance-date">
              {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
            </Text>
          </View>
        </View>

        <View>
          <ListHeading title={"Upcoming"} />
          <FlatList
            data={UPCOMING_SUBSCRIPTIONS}
            horizontal={true}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={true}
            renderItem={({ item }) => <UpcomingSubscriptionCard {...item} />}
          />
        </View>

        <View>
          <ListHeading title={"Upcoming"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
