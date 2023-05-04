import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";

export default function Shop() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <View style={styles.list}>
        <View style={[styles.line, { marginTop: 33 }]}>
          <Image
            source={require("./assets/SHOP.png")}
            style={styles.imageShop}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Devices</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Accessorios</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Men,s wear</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Calendar 2023</Text>
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
  lineMain: {
    height: 70,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 33,
    marginTop: 57,
  },
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
  imageShop: {
    width: 148,
    height: 22,
    resizeMode: "contain",
    marginBottom: 23,
  },
});
