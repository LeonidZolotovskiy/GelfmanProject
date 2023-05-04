import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";

export default function DataTime() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <ScrollView
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={[styles.lineMain]}>
          <View style={styles.center}>
            <Image
              source={require("./assets/arrowLeft.png")}
              style={styles.arrowImage}
            />
            <Image
              source={require("./assets/DATE.png")}
              style={styles.imageDATA}
            />
          </View>
        </View>
        <View style={styles.line}>
          <Text style={[styles.text, styles.orangeText]}>Time</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Current Time</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Hours duration, ms</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Minutes duration, ms</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Sync time with worldwide</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Format Time</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={[styles.text, styles.orangeText]}>Date</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Current Time</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Days duration, ms</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Mounth duration, ms</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Sync time with worldwide</Text>
          <Text style={styles.lineText}>On</Text>
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
    marginBottom: 21,
    marginRight: 10,
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
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
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
  imageDATA: {
    width: 216,
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
  center: {
    flexDirection: "row",
    alignItems: "center",
  },
});
