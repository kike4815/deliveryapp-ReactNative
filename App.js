import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import HomeScreen from "./screens/home/HomeScreen";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" translucent={false} />
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      <HomeScreen />
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(101, 37, 131)",
    background: "transparent",
  },
};
