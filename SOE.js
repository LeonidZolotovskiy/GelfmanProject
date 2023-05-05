import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from "react-native";
import { Switch } from "react-native-switch";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";
import styles from "./styles";

export default function SOE() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <View style={styles.list}>
        <View style={styles.lineMain}>
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
