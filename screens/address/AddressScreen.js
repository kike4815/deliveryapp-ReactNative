import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Appbar, Button, TextInput } from "react-native-paper";
import { addressStyle } from "./AddressStyleScreen";

const AddressScreen = () => {
  const destinations = [1, 2];

  return (
    <SafeAreaView>
      <Appbar>
        <Appbar.BackAction />
        <Appbar.Content
          title="Delivery App"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 50,
          }}
        />
      </Appbar>
      <View style={addressStyle.marginHorizontal}>
        <TextInput label="Origin" />
        {destinations.map((destination, index) => (
          <TextInput
            key={`destination${index}`}
            label="Destination"
            right={
              destinations.length > 1 ? <TextInput.Icon name="close" /> : null
            }
          />
        ))}
      </View>
      <View>
        <Button
          icon="plus"
          style={addressStyle.buttonIconAdd}
          labelStyle={addressStyle.buttonIconLabelStyle}
        />
      </View>
      <Button
        mode="contained"
        uppercase={false}
        style={addressStyle.readyButtonStyle}
      >
        Ready
      </Button>
    </SafeAreaView>
  );
};

export default AddressScreen;
