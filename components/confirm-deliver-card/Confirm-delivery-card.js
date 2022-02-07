import { View } from "react-native";
import React from "react";
import { Card, IconButton, List, Button } from "react-native-paper";

const ConfirmDeliveryCard = () => {
  return (
    <Card>
      <Card.Content>
        <List.Item
          title="$ 15.00"
          description="Total Price of Delivery"
          left={() => <IconButton icon="bike" size={30} />}
          right={() => (
            <View>
              <Button>Cancel</Button>
              <Button mode="contained">Confirm</Button>
            </View>
          )}
        />
      </Card.Content>
    </Card>
  );
};

export default ConfirmDeliveryCard;
