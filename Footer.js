import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

export default function Footer() {
  return (
    <View style={styles.viewFooter}>
      <Image source={require("./assets/Icon.png")} style={styles.imageIcon} />
      <Image
        source={require("./assets/IconFooter2.png")}
        style={styles.imageIconFooter2}
      />
      <Image
        source={require("./assets/shopping-cart.png")}
        style={styles.shoppingCart}
      />
      <Image source={require("./assets/star.png")} style={styles.imageStar} />
    </View>
  );
}
