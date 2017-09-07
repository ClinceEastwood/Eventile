import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import { colors } from "../assets/colors";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          backgroundColor: colors.white,
          justifyContent: "center",
          alignItems: "center",
          flex: 1
        }}
      >
        <Text style={{ color: colors.primaryTextColor }}>
          Hello Navigation!
        </Text>
      </View>
    );
  }
}
