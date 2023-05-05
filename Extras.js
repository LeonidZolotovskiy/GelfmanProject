import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";
import styles from "./styles";

export default function Extras() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <View style={[styles.list, { marginTop: 50 }]}>
        <View style={[styles.line]}>
          <Image
            source={require("./assets/EXTRAS.png")}
            style={styles.imageExtras}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Comics"Helloween Storys"</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Wallpapers</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}
