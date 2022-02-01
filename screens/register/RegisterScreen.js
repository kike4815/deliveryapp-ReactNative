import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import { TextInput, Button, Appbar } from "react-native-paper";
import { registerStyles } from "./StyleRegister";

export default function LoginScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Appbar>
          <Appbar.BackAction />
          <Appbar.Content title="Register" />
        </Appbar>
        <View style={registerStyles.content}>
          <TextInput
            label="name"
            keyboardType="default"
            right={<TextInput.Icon name="pen" />}
          />
          <TextInput label="Email" right={<TextInput.Icon name="email" />} />
          <TextInput
            label="Password"
            secureTextEntry={true}
            right={<TextInput.Icon name="eye" />}
          />
          <TextInput
            label="confirm Password"
            secureTextEntry={true}
            right={<TextInput.Icon name="eye-off" />}
          />
          <TextInput
            label="phone"
            keyboardType="phone-pad"
            right={<TextInput.Icon name="phone" />}
          />
          <Button mode="contained" style={registerStyles.view}>
            Register
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
