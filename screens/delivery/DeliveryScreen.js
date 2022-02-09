import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { Appbar, Avatar, Card, List } from "react-native-paper";
import { deliveryStyles } from "./DeliveryStyleScreen";

const DeliveryScreen = () => {
  return (
    <SafeAreaView style={deliveryStyles.flex}>
      <Appbar>
        <Appbar.BackAction />
        <Appbar.Content
          title="Delivery Details"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 50,
          }}
        />
      </Appbar>
      <View style={deliveryStyles.flex}>
        <MapView
          style={deliveryStyles.flex}
          initialRegion={{
            latitude: -3.725,
            longitude: -38.513,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        ></MapView>
      </View>
      <Card>
        <Card.Title
          title={"99/99/9999"}
          right={() => <Text style={deliveryStyles.priceCard}>$ 30.00</Text>}
        ></Card.Title>
        <Card.Content>
          <List.Item
            title={"Paulo Alves"}
            description="53 deliveries"
            left={() => (
              <Avatar.Image
                size={52}
                src={{
                  uri: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
                }}
              />
            )}
          />
          <List.Item
            title={"Origin"}
            description="Origin Street, 60"
            left={() => <List.Icon icon="flag-outline" />}
          />
          <List.Item
            title={"Destination"}
            description="Destination Street, 60"
            left={() => <List.Icon icon="flag-checkered" />}
          />
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
