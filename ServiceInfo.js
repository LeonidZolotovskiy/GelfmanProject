import React from "react";
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";

export default function ServiceInfo() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <View style={[styles.list, { marginTop: 50 }]}>
        <View style={styles.lineMain}>
          <Image
            source={require("./assets/arrowLeft.png")}
            style={[styles.arrowImage, { marginRight: 21 }]}
          />
          <Image
            source={require("./assets/SERVICEINFO.png")}
            style={styles.imageSI}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Modal</Text>
          <Text style={[styles.text, styles.lineText]}>IN-16</Text>
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
          <View style={styles.viewButton}>
            <TouchableOpacity style={styles.styleButton}>
              <Text>Reset to default</Text>
            </TouchableOpacity>
          </View>
          <Footer />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageSI: {
    width: 256,
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
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#303030",
    borderBottomStyle: "solid",
  },
  lineMain: {
    height: 100,
    flexDirection: "row",
    justifyContent: "flex-start",
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
  lineText: {
    fontSize: 20,
    height: 22,
    color: "rgba(255, 255, 255, 0.5)",
  },
  viewButton: {
    flex: 1,
    marginLeft: 17,
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
    position: "absolute",
    bottom: 70, // установить высоту, равную высоте Footer + отступ от него
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center", // добавлено свойство
  },
});
