import {
  formatCurrency,
  formatStatusLabel,
  formatSubscriptionDateTime,
} from "@/lib/utils";
import clsx from "clsx";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const SubcriptionCard = ({
  name,
  price,
  category,
  currency,
  status,
  paymentMethod,
  renewalDate,
  startDate,
  plan,
  icon,
  billing,
  color,
  expanded,
  onPress,
}: SubscriptionCardProps) => {
  return (
    <Pressable
      className={clsx("sub-card", expanded ? "sub-card-expanded" : "bg-card")}
      style={!expanded && color ? { backgroundColor: color } : undefined}
      onPress={onPress}
    >
      <View className="sub-head">
        <View className="sub-main">
          <Image source={icon} className="sub-icon" />
          <View className="sub-copy">
            <Text className="sub-title" numberOfLines={1}>
              {name}
            </Text>
            <Text
              className="sub-category"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {category?.trim() ||
                plan?.trim() ||
                (renewalDate ? formatSubscriptionDateTime(renewalDate) : "")}
            </Text>
          </View>
        </View>
        <View className="sub-price-box">
          <Text className="sub-price">{formatCurrency(price)}</Text>
          <Text className="sub-billing">{billing}</Text>
        </View>
      </View>

      {expanded && (
        <View className="sub-body">
          <View className="sub-details">
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Payment: </Text>
                <Text className="sub-value">{paymentMethod || "N/A"}</Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Category: </Text>
                <Text className="sub-value">{category || "N/A"}</Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Started: </Text>
                <Text className="sub-value">
                  {formatSubscriptionDateTime(startDate) || "N/A"}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Renewal: </Text>
                <Text className="sub-value">
                  {formatSubscriptionDateTime(renewalDate) || "N/A"}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Status: </Text>
                <Text className="sub-value">
                  {status ? formatStatusLabel(status) : "N/A"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default SubcriptionCard;
