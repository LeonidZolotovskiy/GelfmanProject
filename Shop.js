import React from "react";
import { View, StatusBar, Text, StyleSheet, Image } from "react-native";
import Footer from "./Footer";
import StatusBarBlack from "./StatusBar";
import styles from "./styles"
export default function Shop() {
  return (
    <View style={styles.container}>
      <StatusBarBlack />
      <View style={styles.list}>
        <View style={[styles.line, { marginTop: 33 }]}>
          <Image
            source={require("./assets/SHOP.png")}
            style={styles.imageShop}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Devices</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Accessorios</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Men`s wear</Text>
          <Image
            source={require("./assets/Arrow.png")}
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Calendar 2023</Text>
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

