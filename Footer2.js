import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

export default function Footer2() {
  return (
    <View style={styles.viewFooter}>
      <Image source={require("./assets/hammer.png")} style={styles.hammer} />
      <Image
        source={require("./assets/IconFooter2.png")}
        style={styles.imageIconFooter2}
      />
      <Image source={require("./assets/Search.png")} style={styles.search} />
      <Image source={require("./assets/User.png")} style={styles.user} />
    </View>
  );
}
