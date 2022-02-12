import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/login/LoginScreen";
import HomeScreen from "../../screens/home/HomeScreen";
import RegisterScreen from "../../screens/register/RegisterScreen";
import AddressScreen from "../../screens/address/AddressScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRoute="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Register" component={RegisterScreen} />
        <Screen name="Address" component={AddressScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
