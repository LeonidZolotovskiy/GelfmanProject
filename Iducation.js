import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import StatusBarBlack from "./StatusBar";

export default function Iducation() {
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
            source={require("./assets/INDICATION.png")}
            style={styles.imageIducation}
          />
        </View>
        <View style={styles.rowBattery}>
          <Image
            source={require("./assets/image4.png")}
            style={[styles.battery,{marginRight: 21}]}
          />
          <View style={{ mardin: 42 }} />
          <Image
            source={require("./assets/image5.png")}
            style={[styles.battery,{marginLeft: 21}]}
          />
        </View>
        <View style={styles.line}>
          <View>
            <View style={{ marginBottom: 12 }}>
              <Text style={[styles.text, styles.orangeText]}>Brightness:</Text>
            </View>
            <View style={styles.center}>
              <View style={styles.cellPoint} />
              <View style={styles.cellPoint} />
              <View style={styles.cellPoint} />
              <View style={styles.cellPoint} />
              <View style={styles.cellPoint} />
              <View style={styles.cellPoint} />
              <View style={styles.cellPoint} />
              <View style={styles.cellPoint} />
              <View style={styles.cellPoint} />
              <View style={styles.cellPoint} />
              <View style={styles.cellPoint} />
              <View style={styles.cellPoint} />
              <View style={styles.cellPoint} />
              <View style={styles.cellPoint} />
              <View style={styles.cellPointOff} />
              <View style={styles.cellPointOff} />
              <View style={styles.cellPointOff} />
              <View style={styles.cellPointOff} />
              <View style={styles.cellPointOff} />
              <View style={styles.cellPointOff} />
              <View style={styles.cellPointOff} />
              <View style={styles.cellPointOff} />
              <View style={styles.cellPointOff} />
              <View style={styles.cellPointOff} />
              <View style={styles.cellPointOff} />
            </View>
          </View>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Current, mA</Text>
          <Text style={styles.lineText}>12</Text>
        </View>
        <View style={styles.line}>
          <Text style={[styles.text, styles.orangeText]}>Duration,ms</Text>
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
          <Text style={[styles.text, styles.orangeText]}>Last Change:</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Current Time</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  rowBattery: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowImage: {
    width: 6,
    height: 12,
  },
  imageIducation: {
    width: 207,
    height: 22,
    resizeMode: "contain",
    marginLeft: 20,
    marginBottom: 24,
    marginTop: 40,
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
    alignItems: "center",
    padding: 22,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontStyle: "normal",
    height: 22,
  },
  battery: {
    width: 76,
    height: 287,
    resizeMode: "contain",
    marginBottom: 24,
    marginTop: 40,
  },
  orangeText: {
    color: "#FFA800",
    fontWeight: 900,
  },
  center: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cellPoint: {
    marginRight: 4,
    width: 10,
    height: 50,
    backgroundColor: "#FFA800",
    borderRadius: 50,
  },
  cellPointOff: {
    marginRight: 4,
    width: 10,
    height: 50,
    backgroundColor: "#4A4A4A",
    borderRadius: 50,
  },
  lineText: {
    fontSize: 20,
    height: 22,
    color: "rgba(255, 255, 255, 0.5)",
  },
});
