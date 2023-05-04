import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";

export default function Extras() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <View style={[styles.list, { marginTop: 50 }]}>
        <View style={[styles.line]}>
          <Image
            source={require("./assets/EXTRAS.png")}
            style={styles.imageExtras}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Comics"Helloween Storys"</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Wallpapers</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  arrowImage: {
    width: 6,
    height: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  list: {
    flexDirection: "column",
  },
  line: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#303030",
    borderBottomStyle: "solid",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontStyle: "normal",
    height: 22,
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  imageExtras: {
    width: 148,
    height: 22,
    resizeMode: "contain",
    marginBottom: 23,
  },
});
