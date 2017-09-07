import React, { Component } from "react";
import { AppRegistry, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

import Chat from "./components/Chat";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello Navigation!</Text>
        <Button
          onPress={() => navigate("Chat", { user: "David" })}
          title="Chat"
        />
      </View>
    );
  }
}

const Eventile = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: Chat }
});

AppRegistry.registerComponent("Eventile", () => Eventile);
