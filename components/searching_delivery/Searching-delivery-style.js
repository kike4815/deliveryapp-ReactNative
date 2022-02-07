import { StyleSheet } from "react-native";

export const searchingStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
  title: {
    margin: 20,
    marginTop: 40,
    textAlign: "center",
    color: "rgb(101, 37, 131)",
  },
  cancelDeliveryButton: {
    position: "absolute",
    margin: "2%",
    bottom: 0,
    width: "90%",
  },
});
