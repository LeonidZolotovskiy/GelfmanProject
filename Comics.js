import React from "react";
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import StatusBarBlack from "./StatusBar";

export default function Comics() {
  return (
    <ImageBackground
      source={require("./assets/Dropboxp.png")}
      style={styles.container}
    >
      <StatusBarBlack />
      <View style={[styles.list, { marginTop: 10 }]}>
        <View style={styles.lineMain}>
          <Image
            source={require("./assets/arrowLeft.png")}
            style={[styles.arrowImage, { marginRight: 21 }]}
          />
          <Image
            source={require("./assets/Comics.png")}
            style={styles.imageComics}
          />
        </View>
        <View style={styles.footerContainer}>
          <Footer2 />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageComics: {
    width: 141,
    height: 22,
    resizeMode: "contain",
    marginBottom: 23,
  },
  arrowImage: {
    width: 6,
    height: 12,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    backgroundImage: require("./assets/Dropboxp.png"),
  },
  list: {
    flexDirection: "column",
    flex: 1,
  },
  line: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lineMain: {
    height: 100,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontStyle: "normal",
    height: 22,
  },
  footerContainer: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
