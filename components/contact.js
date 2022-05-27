import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { List, Colors } from "react-native-paper";

const MyContact = () => (
  <>
    <View style={styles.container}>
      <List.Icon color={Colors.blue500} icon="phone" />
      <Text style={styles.text}>+55 21 22531177</Text>
      {/*   <List.Icon color={Colors.blue500} icon="map-marker" />
    <List.Icon color={Colors.blue500} icon="mail" /> */}
    </View>
    <View style={styles.container}>
      <List.Icon color={Colors.blue500} icon="map-marker" />
      <Text style={styles.text}>Last house on the left</Text>
    </View>
    <View style={styles.container}>
      <List.Icon color={Colors.blue500} icon="mail" />
      <Text style={styles.text}>resident@evil.com</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#0089D6",
  },
});

export default MyContact;
