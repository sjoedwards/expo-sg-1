import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreenState = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (color, change) => {
    switch (`${color}`.toLowerCase()) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "default":
        return;
    }
  };

  const counterProps = (name, getColor, increment) => {
    return {
      name,
      value: getColor,
      onIncrease: () => setColor(name, increment),
      onDecrease: () => setColor(name, -1 * increment),
    };
  };

  return (
    <View>
      <ColorCounter {...counterProps("Red", red, COLOR_INCREMENT)} />
      <ColorCounter {...counterProps("Blue", blue, COLOR_INCREMENT)} />
      <ColorCounter {...counterProps("Green", green, COLOR_INCREMENT)} />
      <View
        style={{
          ...style.colorBox,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  colorBox: {
    height: 150,
    width: 150,
  },
});

export default SquareScreenState;
