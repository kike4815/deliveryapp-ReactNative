import { View, SafeAreaView } from "react-native";
import React from "react";
import { Card, TextInput, Button } from "react-native-paper";
import { loginStyles } from "./StyleLogin";

export default function LoginScreen() {
  return (
    <SafeAreaView style={loginStyles.content}>
      <View style={loginStyles.view}>
        <Card>
          <Card.Title title="DeliveryApp" titleStyle={loginStyles.cardTitle} />
          <Card.Content>
            <TextInput
              label="email"
              keyboardType="email-address"
              right={<TextInput.Icon name="email" />}
            />
            <TextInput
              label="Password"
              secureTextEntry={true}
              right={<TextInput.Icon name="eye" />}
            />
            <Button uppercase={false}>forgot email/password</Button>
            <Button mode="contained">login</Button>
            <Button>Register</Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
}
