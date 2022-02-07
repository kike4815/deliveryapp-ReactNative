import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(101, 37, 131)",
  },
  markerImage: {
    height: 35,
    width: 35,
    tintColor: "rgb(101, 37, 131)",
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
