import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { Appbar, Card } from "react-native-paper";
import { deliveriesStyles } from "./DeliveriesStyle";

const DeliveresScreen = () => {
  const deliveries = [1, 2];

  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.BackAction />
        <Appbar.Content
          title="My deliveries"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 50,
          }}
        />
      </Appbar>
      <FlatList
        data={deliveries}
        keyExtractor={(item, index) => `deliveries${index}`}
        renderItem={(item, index) => (
          <Card
            style={{ ...deliveriesStyles.card, ...deliveriesStyles.cardStatus }}
          >
            <Card.Cover
              source={{
                uri: "https://snazzy-maps-cdn.azureedge.net/assets/74-becomeadinosaur.png?v=20170626082939",
              }}
            />
            <Card.Title
              title={"99/99/9999"}
              subtitle={"Delviery Person Name"}
              right={() => (
                <Text style={deliveriesStyles.priceCard}>$ 30.00</Text>
              )}
            />
          </Card>
        )}
      />
    </SafeAreaView>
  );
};

export default DeliveresScreen;
