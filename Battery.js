import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";
import styles from "./styles";

export default function Battery() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <ScrollView
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.lineMain1}>
          <Image
            source={require("./assets/arrowLeft.png")}
            style={[styles.arrowImage, { marginTop: 15 }]}
          />
          <Image
            source={require("./assets/BATTERY.png")}
            style={styles.imageBattery}
          />
          <View style={styles.mapCharging}>
            <Text style={styles.textCharging}>Charging...</Text>
          </View>
        </View>
        <Image source={require("./assets/12.png")} style={styles.image12} />
        <View style={styles.line}>
          <Text style={[styles.text,styles.orangeText]}>LifeTime:</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Battery,%</Text>
          <Text style={styles.lineText}>12</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Hours with lamps</Text>
          <Text style={styles.lineText}>434</Text>
        </View>
        <View style={styles.line}>
          <Text style={[styles.text, styles.orangeText]}>
            Last Change:
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Days ago</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>%, of battery charged</Text>
          <Text style={styles.lineText}>32</Text>
        </View>
        <View style={styles.line}>
          <Text style={[styles.text, styles.orangeText]}>
            Parameters:
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Battery voltage</Text>
          <Text style={styles.lineText}>12</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Charge circles</Text>
          <Text style={styles.lineText}>434</Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

