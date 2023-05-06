import React from "react";
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";
import styles from "./styles";

export default function Settings() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <ScrollView
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={[styles.lineMain]}>
          <Image
            source={require("./assets/arrowLeft.png")}
            style={[styles.arrowImage, { marginRight: 21,marginBottom: 60 }]}
          />
          <Image
            source={require("./assets/SETTINGS.png")}
            style={styles.imageSetting}
          />
        </View>
        <View style={styles.line}>
          <Text style={[styles.text,styles.orangeText]}>Button Click:</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>First</Text>
          <Text style={[styles.text, styles.lineText]}>
            Hours the minutes
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Second</Text>
          <Text style={[styles.text,styles.lineText]}>
            Days then month
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Third</Text>
          <Text style={[styles.text, styles.lineText]}>
            Battery,%
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={[styles.text, styles.orangeText]}>Settings:</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Sheduled switch on</Text>
          <Text style={[styles.text, styles.lineText]}>
            Off
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Accelerometor</Text>
          <Text style={[styles.text,styles.lineText]}>
            Show time
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Personalization</Text>
          <Text style={[styles.text, styles.lineText]}>
            Right-handed
          </Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}


