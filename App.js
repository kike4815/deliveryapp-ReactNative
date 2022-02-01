import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" translucent={false} />
      {/* <LoginScreen /> */}
      <RegisterScreen />
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
