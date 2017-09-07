import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import IntroScreen from "../screens/IntroScreen";

export const Tabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: () => <Icon name="home" size={35} color={"green"} />,
      animationEnabled: true
    }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      tabBarLabel: "List",
      tabBarIcon: () => <Icon name="chat" size={35} color={"green"} />,
      animationEnabled: true
    }
  }
});

export const Stack = StackNavigator({
  Intro: {
    screen: IntroScreen,
    navigationOptions: {
      header: null
    }
  },
  App: {
    screen: Tabs,
    navigationOptions: {
      title: "Eventile"
    }
  }
});
