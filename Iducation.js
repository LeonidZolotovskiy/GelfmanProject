import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import StatusBarBlack from "./StatusBar";
import styles from "./styles";

export default function Iducation() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <ScrollView
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.lineMain2}>
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
            style={[styles.battery, { marginRight: 21 }]}
          />
          <View style={{ mardin: 42 }} />
          <Image
            source={require("./assets/image5.png")}
            style={[styles.battery, { marginLeft: 21 }]}
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


