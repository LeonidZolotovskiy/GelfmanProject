import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";
import styles from "./styles";

export default function Statistics() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <View style={[styles.list, { marginTop: 30 }]}>
        <View style={[styles.lineMainStatistics]}>
          <Image
            source={require("./assets/arrowLeft.png")}
            style={[styles.arrowImage3]}
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

