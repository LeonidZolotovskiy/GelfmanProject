import { Image, StyleSheet, View } from "react-native";
import GELFMAN from "./GELFMAN";
import StatusBarBlack from "./StatusBar";

export default function FirstPage() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <Image
        source={require("./assets/Logo.png")}
        style={styles.logo}
      />
      <GELFMAN />
      <Image source={require("./assets/LOADING.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo:
    {
      width: 122.86,
      height: 128.02,
    }
  ,
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { position: "absolute", bottom: 51, width: 122.86, height: 13 },
});
