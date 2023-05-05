import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";
import styles from "./styles";

export default function ServiceInfo() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <View style={[styles.list, { marginTop: 29 }]}>
        <View style={styles.lineMain1}>
          <Image
            source={require("./assets/arrowLeft.png")}
            style={[styles.arrowImage4]}
          />
          <Image
            source={require("./assets/SERVICEINFO.png")}
            style={[styles.imageSI, { marginRight: 30 }]}
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
