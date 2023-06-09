import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Footer2 from "./Footer2";
import StatusBarBlack from "./StatusBar";

export default function Wallpapers() {
  return (
    <ImageBackground
      source={require("./assets/Girl.png")}
      style={styles.Wallpapers}
    >
      <StatusBarBlack />
      <View style={[styles.list, { marginTop: 10 }]}>
        <View style={styles.lineMain}>
          <Image
            source={require("./assets/arrowLeft.png")}
            style={[styles.arrowImage4, { marginRight: 21 }]}
          />
          <Image
            source={require("./assets/Wallpapers.png")}
            style={styles.imageWallpapers}
          />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.viewButton}>
            <TouchableOpacity style={styles.styleButton}>
              <Text>Set wallpaper</Text>
            </TouchableOpacity>
          </View>
          <Footer2 />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  arrowImage4: {
    width: 6,
    height: 12,
    marginBottom: 20,
  },
  Wallpapers: {
    flex: 1,
    backgroundColor: "black",
    backgroundImage: require("./assets/Dropboxp.png"),
  },

  list: {
    flex: 1,
    flexDirection: "column",
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
  imageWallpapers: {
    width: 257,
    height: 22,
    resizeMode: "contain",
    marginBottom: 23,
  },
  viewButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  styleButton: {
    padding: 10,
    width: 339,
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 68, // установить высоту, большую, чем высота Footer
  },
});
