import { Image, StyleSheet, View } from "react-native";
import GELFMAN from "./GELFMAN";
import StatusBarBlack from "./StatusBar";
import styles from "./styles";

export default function FirstPage() {
  return (
    <View style={styles.containerFistPage}>
      <StatusBarBlack />
      <Image source={require("./assets/Logo.png")} style={styles.logo} />
      <GELFMAN />
      <Image
        source={require("./assets/LOADING.png")}
        style={styles.imageLoading}
      />
    </View>
  );
}

