import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from "react-native";
import { Switch } from "react-native-switch";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";

export default function SOE() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <View style={[styles.list, { marginTop: 50 }]}>
        <View style={[styles.lineMain]}>
          <Image
            source={require("./assets/arrowLeft.png")}
            style={[styles.arrowImage, { marginRight: 21, marginBottom: 45 }]}
          />
          <Image
            source={require("./assets/Switch_on_effect.png")}
            style={styles.imageSOE}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Classic</Text>
          <Switch
            value={false}
            activeText={"On"}
            inActiveText={"Off"}
            backgroundActive={"green"}
            backgroundInactive={"gray"}
            circleActiveColor={"#30a566"}
            circleInActiveColor={"#000000"}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Flash</Text>
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
    marginTop: 5,
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
  imageSOE: {
    width: 204,
    height: 44,
    resizeMode: "contain",
    marginBottom: 23,
  },
});
