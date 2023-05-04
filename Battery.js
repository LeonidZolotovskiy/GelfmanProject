import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";

export default function Battery() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <ScrollView
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.lineMain}>
          <Image
            source={require("./assets/arrowLeft.png")}
            style={[styles.arrowImage, { marginTop: 15 }]}
          />
          <Image
            source={require("./assets/BATTERY.png")}
            style={styles.imageBattery}
          />
          <View style={styles.mapCharging}>
            <Text style={styles.textCharging}>Charging...</Text>
          </View>
        </View>
        <Image source={require("./assets/12.png")} style={styles.image12} />
        <View style={styles.line}>
          <Text style={[styles.text,styles.orangeText]}>LifeTime:</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Battery,%</Text>
          <Text style={styles.lineText}>12</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Hours with lamps</Text>
          <Text style={styles.lineText}>434</Text>
        </View>
        <View style={styles.line}>
          <Text style={[styles.text, styles.orangeText]}>
            Last Change:
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Days ago</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>%, of battery charged</Text>
          <Text style={styles.lineText}>32</Text>
        </View>
        <View style={styles.line}>
          <Text style={[styles.text, styles.orangeText]}>
            Parameters:
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Battery voltage</Text>
          <Text style={styles.lineText}>12</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Charge circles</Text>
          <Text style={styles.lineText}>434</Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  arrowImage: {
    width: 6,
    height: 12,
  },
  orangeText: {
    color: "#FFA800",
    fontWeight: 900,
  },
  imageBattery: {
    width: 166,
    height: 22,
    resizeMode: "contain",
    marginBottom: 24,
    marginTop: 40,
  },
  mapCharging: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textCharging: {
    borderRadius: 4,
    width: 82,
    overflow: "hidden",
    backgroundColor: "#66C770",
    textAlign: "center",
  },
  image12: {
    width: 323,
    height: 321,
    resizeMode: "contain",
    marginBottom: 24,
    marginLeft: 30,
  },
  lineText: {
    fontSize: 20,
    height: 22,
    color: "rgba(255, 255, 255, 0.5)",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  list: {
    flex: 1,
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
  lineMain: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontStyle: "normal",
    height: 22,
  },
});
