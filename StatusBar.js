import { StatusBar } from "react-native";

export default function StatusBarBlack() {
  return (
    <StatusBar
      backgroundColor="#ffffff"
      barStyle="light-content"
      translucent={false}
      height={StatusBar.currentHeight}
    />
  );
}
