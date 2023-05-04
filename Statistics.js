import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";

export default function Statistics() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <View style={[styles.list, { marginTop: 30 }]}>
        <View style={[styles.lineMain]}>
          <Image
            source={require("./assets/arrowLeft.png")}
            style={[styles.arrowImage]}
          />
          <Image
            source={require("./assets/STATISTICS.png")}
            style={styles.imageStatistics}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>First</Text>
          <Text style={[styles.text, styles.lineText]}>Hours the minutes</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Second</Text>
          <Text style={[styles.text, styles.lineText]}>Days then month</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Third</Text>
          <Text style={[styles.text, styles.lineText]}>Battery,%</Text>
        </View>
        <View style={styles.footerContainer}>
          <Footer />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  arrowImage: {
    width: 6,
    height: 12,
    marginRight:20,
    marginBottom:20,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  list: {
    flexDirection: "column",
    flex: 1,
  },
  lineMain: {
    height: 70,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 33,
    marginBottom: 10,
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
  imageStatistics: {
    width: 210,
    height: 22,
    resizeMode: "contain",
    marginBottom: 23,
  },
  lineText: {
    fontSize: 20,
    height: 22,
    color: "rgba(255, 255, 255, 0.5)",
  },
  arrowLeft:{},
});
