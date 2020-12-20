import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <>
      <Text>With Flexbox:</Text>
      <View style={{ ...style.view, ...style.viewOneStyle }}>
        <View style={{ ...style.box, ...style.textOneStyle }} />
        <View style={{ ...style.box, ...style.textTwoStyle }} />
        <View style={{ ...style.box, ...style.textThreeStyle }} />
      </View>
      <Text>With BOM:</Text>
      <View style={{ ...style.view, ...style.viewTwoStyle }}>
        <View style={{ ...style.box, ...style.textFourStyle }} />
        <View style={{ ...style.box, ...style.textFiveStyle }} />
        <View style={{ ...style.box, ...style.textSixStyle }} />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    borderWidth: 3,
  },
  view: { borderWidth: 3, borderColor: "black", height: 200 },
  viewOneStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textOneStyle: { backgroundColor: "red" },
  textTwoStyle: {
    alignSelf: "flex-end",
    backgroundColor: "green",
  },
  textThreeStyle: { backgroundColor: "purple" },
  viewTwoStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textFourStyle: { backgroundColor: "red" },
  textFiveStyle: { backgroundColor: "green", top: 94 },
  textSixStyle: { backgroundColor: "purple" },
});

export default BoxScreen;
