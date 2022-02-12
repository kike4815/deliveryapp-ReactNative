import React from "react";
import { SafeAreaView, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { homeStyle } from "./HomeScreenStyle";
import { FAB, Appbar, Menu } from "react-native-paper";
import ConfirmDeliveryCard from "../../components/confirm-deliver-card/Confirm-delivery-card";
import SearchingDelivery from "../../components/searching_delivery/Searching-delivery";

const HomeScreen = ({ navigation }) => {
  const state = 1;

  return (
    <SafeAreaView style={homeStyle.flex}>
      <Appbar>
        <Menu
          visible={true}
          onDismiss={() => {}}
          anchor={<Appbar.Action icon="menu" color="white" />}
        />
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
      <MapView
        style={homeStyle.flex}
        initialRegion={{
          latitude: -3.725,
          longitude: -38.513,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        {state === 1 ? (
          <>
            <Marker
              description="Delivery Person 1"
              coordinate={{ latitude: -3.725, longitude: -38.513 }}
            >
              <Image
                style={homeStyle.markerImage}
                source={require("../../assets/hombre-ciclismo.png")}
              />
            </Marker>
            <Marker
              description="Delivery Person 1"
              coordinate={{ latitude: -3.73, longitude: -38.505 }}
            >
              <Image
                style={homeStyle.markerImage}
                source={require("../../assets/hombre-ciclismo.png")}
              />
            </Marker>
            <Marker
              description="Delivery Person 1"
              coordinate={{ latitude: -3.735, longitude: -38.498 }}
            >
              <Image
                style={homeStyle.markerImage}
                source={require("../../assets/hombre-ciclismo.png")}
              />
            </Marker>
          </>
        ) : null}
        {state === 2 ? (
          <>
            <Marker
              description="Delivery Person 1"
              coordinate={{ latitude: -3.725, longitude: -38.513 }}
            ></Marker>
            <Marker
              description="Delivery Person 1"
              coordinate={{ latitude: -3.725, longitude: -38.511 }}
            ></Marker>
          </>
        ) : null}
      </MapView>
      {state === 1 ? (
        <FAB
          style={homeStyle.fab}
          icon="plus"
          onPress={() => navigation.navigate("Login")}
        />
      ) : null}
      {state === 2 ? <ConfirmDeliveryCard /> : null}
      {state === 3 ? <SearchingDelivery /> : null}
    </SafeAreaView>
  );
};

export default HomeScreen;
