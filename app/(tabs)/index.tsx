import ListHeading from "@/components/ListHeading";
import SubcriptionCard from "@/components/SubcriptionCard";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { formatCurrency } from "@/lib/utils";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import dayjs from "dayjs";
import { useState } from "react";
import { FlatList, Image, LogBox, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

const App = () => {
  LogBox.ignoreAllLogs(); // Ignore all log notifications
  const tabBarHeight = useBottomTabBarHeight();

  const [expandedSubId, setExpandedSubId] = useState<string | null>(null);
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: tabBarHeight }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
      >
        <View className="home-header">
          <View className="home-user w-full align-items-center justify-between">
            <Image source={images.avatar} className="home-avatar" />
            <Text className="home-user-name text-lg/6 w-40 font-sans-bold">
              {HOME_USER.name}
            </Text>
            <Image
              source={icons.add}
              className="home-add-icon border border-gray-400 rounded-full"
            />
          </View>
        </View>
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
          <ListHeading title={"All Subscriptions"} />
          <FlatList
            data={HOME_SUBSCRIPTIONS}
            horizontal={false}
            scrollEnabled={false}
            contentContainerStyle={{ gap: 15 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <SubcriptionCard
                expanded={expandedSubId === item.id}
                onPress={() =>
                  setExpandedSubId(expandedSubId === item.id ? null : item.id)
                }
                {...item}
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
