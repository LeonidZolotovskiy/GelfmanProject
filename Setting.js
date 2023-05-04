import React from "react";
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";

export default function Settings() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <ScrollView
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={[styles.lineMain]}>
          <Image
            source={require("./assets/arrowLeft.png")}
            style={[styles.arrowImage, { marginRight: 21 }]}
          />
          <Image
            source={require("./assets/SETTINGS.png")}
            style={styles.imageSetting}
          />
        </View>
        <View style={styles.line}>
          <Text style={[styles.text, styles.orangeText]}>Button Click:</Text>
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
        <View style={styles.line}>
          <Text style={[styles.text, styles.orangeText]}>Settings:o</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Sheduled switch on</Text>
          <Text style={[styles.text, styles.lineText]}>Off</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Accelerometor</Text>
          <Text style={[styles.text, styles.lineText]}>Show time</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Personalization</Text>
          <Text style={[styles.text, styles.lineText]}>Right-handed</Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  arrowImage: {
    marginBottom: 21,
    width: 6,
    height: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  list: {
    flex: 1,
  },
  lineMain: {
    height: 70,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 33,
    marginTop: 57,
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
  imageSetting: {
    width: 181,
    height: 22,
    resizeMode: "contain",
    marginBottom: 23,
  },
  orangeText: {
    color: "#FFA800",
    fontWeight: 900,
  },
  lineText: {
    fontSize: 20,
    height: 22,
    color: "rgba(255, 255, 255, 0.5)",
  },
});
