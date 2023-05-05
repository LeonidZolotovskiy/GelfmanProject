import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from "react-native";

export default function Footer2() {
  return (
    <View
      style={styles.viewFooter}
    >
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

const styles = StyleSheet.create({
  viewFooter: {
    position: "fixed",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height:70
  },
  hammer: {
    width: 20,
    height: 22,
    resizeMode: "contain",
    marginBottom: 24,
    marginTop: 40,
  },
  imageIconFooter2: {
    width: 20,
    height: 22,
    resizeMode: "contain",
    marginBottom: 24,
    marginTop: 40,
    marginLeft:20
  },
  search: {
    width: 70,
    height: 72,
    resizeMode: "contain",
    marginBottom: 24,
    marginTop: 40,
  },
  user: {
    width: 20,
    height: 22,
    resizeMode: "contain",
    marginBottom: 24,
    marginTop: 40,
  },
});
