import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";

export default function MyDevices() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <View style={[styles.list, { marginTop: 50 }]}>
        <View style={[styles.line]}>
          <Image
            source={require("./assets/MYDEVICES.png")}
            style={styles.imageMyDevices}
          />
        </View>
        <View style={[styles.line, { height: 190 }]}>
          <Image
            source={require("./assets/image1.png")}
            style={{ width: 96, height: 121 }}
          />
          <View style={{ flexDirection: "colum" }}>
            <Image
              source={require("./assets/IN-16.png")}
              style={styles.imageIN16}
            />
            <Text style={styles.textHash}>#004</Text>
            <Text style={styles.connected}>Connected</Text>
          </View>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={[styles.line, { height: 190 }]}>
          <Image
            source={require("./assets/image2.png")}
            style={{ width: 96, height: 121 }}
          />
          <View style={{ flexDirection: "colum" }}>
            <Image
              source={require("./assets/IV-16.png")}
              style={styles.imageIV16}
            />
            <Text style={styles.textHash}>#004</Text>
            <Text style={styles.textOff}>Off</Text>
          </View>
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
  textHash: { color: "white", fontWeight: 500, fontSize: 20 },
  connected: {
    marginTop: 15,
    borderRadius: 4,
    width: 82,
    overflow: "hidden",
    backgroundColor: "#66C770",
    textAlign: "center",
  },
  textOff: {
    color: "#FF6F6F",
    marginTop: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#FF6F6F",
    width: 82,
    overflow: "hidden",
    backgroundColor: "#000000",
    textAlign: "center",
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
  imageMyDevices: {
    width: 217,
    height: 22,
    resizeMode: "contain",
    marginBottom: 23,
  },
  imageIV16: {
    width: 89,
    height: 22,
    resizeMode: "contain",
    marginBottom: 23,
  },
  imageIN16: {
    width: 89,
    height: 22,
    resizeMode: "contain",
    marginBottom: 23,
  },
});
