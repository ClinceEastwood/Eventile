import React, { Component } from "react";
import { AppRegistry, Alert, Button, View } from "react-native";
import AppIntro from "react-native-app-intro";
import { colors } from "../assets/colors";

export default class Intro extends Component {
  onSkipBtnHandle = index => {
    Alert.alert("Skip");
    console.log(index);
  };
  doneBtnHandle = () => {
    const { navigate } = this.props.navigation;
    navigate("App");
  };
  nextBtnHandle = index => {
    Alert.alert("Next");
    console.log(index);
  };
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  };
  render() {
    const pageArray = [
      {
        title: "Eventile",
        description: "Organise your organising.",
        img: require("../assets/EventileLogo.png"),
        imgStyle: {
          height: 125 * 2.5,
          width: 125 * 2.5
        },
        backgroundColor: colors.primaryColor,
        fontColor: colors.secondaryTextColor,
        level: 2
      },
      {
        title: "Create",
        description: "Create a task that you need someone to take care of.",
        img: require("../assets/BaseNote.png"),
        imgStyle: {
          height: 125 * 2.5,
          width: 125 * 2.5
        },
        backgroundColor: colors.secondaryColor,
        fontColor: colors.secondaryTextColor,
        level: 2
      },
      {
        title: "Set a deadline",
        description: "Set a date you need it done by",
        img: require("../assets/deadlineNote.png"),
        imgStyle: {
          height: 125 * 2.5,
          width: 125 * 2.5
        },
        backgroundColor: colors.secondaryColor,
        fontColor: colors.secondaryTextColor,
        level: 2
      },
      {
        title: "Assign",
        description: "Assign someone to complete that task.",
        img: require("../assets/FinalNote.png"),
        imgStyle: {
          height: 125 * 2.5,
          width: 125 * 2.5
        },
        backgroundColor: colors.tertiaryColor,
        fontColor: colors.secondaryTextColor,
        level: 2
      },
      {
        title: "Avoid",
        description: "Avoid any mix-ups or confusion",
        img: require("../assets/EventileLogo.png"),
        imgStyle: {
          height: 125 * 2.5,
          width: 125 * 2.5
        },
        backgroundColor: colors.complimentColor,
        fontColor: colors.secondaryTextColor,
        level: 2
      }
    ];
    return (
      <View style={{ flex: 1 }}>
        <AppIntro
          onNextBtnClick={this.nextBtnHandle}
          onDoneBtnClick={this.doneBtnHandle}
          onSkipBtnClick={this.onSkipBtnHandle}
          onSlideChange={this.onSlideChangeHandle}
          pageArray={pageArray}
        />
      </View>
    );
  }
}
