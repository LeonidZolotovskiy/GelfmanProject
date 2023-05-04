import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Footer() {
  return (
    <View
      style={styles.viewFooter}
    >
      <Image
        source={require("./assets/Icon.png")}
        style={styles.imageIcon}
      />
      <Image
        source={require("./assets/IconFooter2.png")}
        style={styles.imageIconFooter2}
      />
      <Image
        source={require("./assets/shopping-cart.png")}
        style={styles.shoppingCart}
      />
      <Image
        source={require("./assets/star.png")}
        style={styles.imageStar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewFooter:
    {
      position: "fixed",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
  imageIcon:{
    width: 20,
    height: 22,
    resizeMode: "contain",
    marginBottom: 24,
    marginTop: 40,
  },
  imageIconFooter2:{
    width: 20,
    height: 22,
    resizeMode: "contain",
    marginBottom: 24,
    marginTop: 40,
  },
  shoppingCart:{
    width: 20,
          height: 22,
          resizeMode: "contain",
          marginBottom: 24,
          marginTop: 40,
  },
  imageStar:{
    width: 20,
    height: 22,
    resizeMode: "contain",
    marginBottom: 24,
    marginTop: 40,
  }
});