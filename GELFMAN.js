import { Image, StyleSheet, View } from "react-native";

export default function GELFMAN() {
  return (
    <View style={styles.gelfman}>
      <Image
        source={require("./assets/GELFMAN/G.png")}
        style={styles.heightLetterG}
      />
      <Image
        source={require("./assets/GELFMAN/E.png")}
        style={styles.heightLetterE}
      />
      <Image
        source={require("./assets/GELFMAN/L.png")}
        style={styles.heightLetterL}
      />
      <Image
        source={require("./assets/GELFMAN/F.png")}
        style={styles.heightLetterF}
      />
      <Image
        source={require("./assets/GELFMAN/M.png")}
        style={styles.heightLetterM}
      />
      <Image
        source={require("./assets/GELFMAN/A.png")}
        style={styles.heightLetterA}
      />
      <Image
        source={require("./assets/GELFMAN/N.png")}
        style={styles.heightLetterN}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heightLetterG: {
    margin: 3,
    width: 19.77,
    height: 13.51,
  },
  heightLetterE: {
    margin: 3,
    width: 17.96,
    height: 13.5,
  },
  heightLetterL: {
    margin: 3,
    width: 16.39,
    height: 13.5,
  },
  heightLetterF: {
    margin: 3,
    width: 18.73,
    height: 13.5,
  },
  heightLetterM: {
    margin: 3,
    width: 22.59,
    height: 14.26,
  },
  heightLetterA: {
    margin: 3,
    width: 20.36,
    height: 13.51,
  },
  heightLetterN: {
    margin: 3,
    width: 19.29,
    height: 15.11,
  },
  gelfman: {
    display: "flex",
    flexDirection: "row",
    marginTop: 22,
  },
});
