import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default class HideSeek extends Component {
  constructor() {
    super();
    this.state = {
      content: false,
    };
  }

  componentHideAndShow = () => {
    this.setState((previousState) => ({ content: !previousState.content }));
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.content ? (
          <Text style={styles.headerText}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </Text>
        ) : null}

        <Text onPress={this.componentHideAndShow} style={styles.LMore}>
          {" "}
          Learn More
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 13,
    textAlign: "left",
    width: 250,
    fontWeight: "bold",
  },
  LMore: {
    color: "blue",
  },
});
