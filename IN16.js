import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";
import styles from "./styles";

export default function IN16() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <ScrollView
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={[styles.line]}>
          <Image
            source={require("./assets/IN-16.png")}
            style={styles.imageIN16}
          />
          <View style={styles.center}>
            <Text style={styles.textConnected}>Connected</Text>
          </View>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>General</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Battery</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Indication</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Time & Date</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Setting</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Statics</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Service info</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
