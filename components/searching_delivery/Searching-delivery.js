import { View } from "react-native";
import React from "react";
import { ActivityIndicator, Button, Title } from "react-native-paper";
import { searchingStyle } from "../searching_delivery/Searching-delivery-style";

const SearchingDelivery = () => {
  return (
    <View style={searchingStyle.flexCenter}>
      <ActivityIndicator animating={true} size="large" />
      <Title style={searchingStyle.title}>
        Searching for a delivery person in your region
      </Title>
      <Button mode="contained" style={searchingStyle.cancelDeliveryButton}>
        Cancel
      </Button>
    </View>
  );
};

export default SearchingDelivery;
