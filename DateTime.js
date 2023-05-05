import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";
import styles from "./styles";

export default function DataTime() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <ScrollView
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={[styles.lineMain]}>
          <View style={styles.center}>
            <Image
              source={require("./assets/arrowLeft.png")}
              style={styles.arrowImage2}
            />
            <Image
              source={require("./assets/DATE.png")}
              style={styles.imageDATA}
            />
          </View>
        </View>
        <View style={styles.line}>
          <Text style={[styles.text, styles.orangeText]}>Time</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Current Time</Text>
          <Text style={styles.lineText}>23</Text>
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
          <Text style={styles.text}>Sync time with worldwide</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Format Time</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={[styles.text, styles.orangeText]}>Date</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Current Time</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Days duration, ms</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Mounth duration, ms</Text>
          <Text style={styles.lineText}>23</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Sync time with worldwide</Text>
          <Text style={styles.lineText}>On</Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
