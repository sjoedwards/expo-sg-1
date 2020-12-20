import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
import counterReducer from "../reducers/counterReducer";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const reducer = (state, action) => {
    const colorReducer = counterReducer(state, action, 255, 0);
    switch (action.type) {
      case "change_red":
        return colorReducer("Red");
      case "change_green":
        return colorReducer("Green");
      case "change_blue":
        return colorReducer("Blue");
      default:
        return state;
    }
  };

  const [{ Red, Green, Blue }, dispatch] = useReducer(reducer, {
    Red: 0,
    Green: 0,
    Blue: 0,
  });

  const counterProps = (name, value, increment) => {
    return {
      name,
      value,
      onIncrease: () => dispatch({ type: name, payload: increment }),
      onDecrease: () => dispatch({ type: name, payload: -1 * increment }),
    };
  };

  return (
    <View>
      <ColorCounter {...counterProps("change_red", Red, COLOR_INCREMENT)} />
      <ColorCounter {...counterProps("change_blue", Blue, COLOR_INCREMENT)} />
      <ColorCounter {...counterProps("change_green", Green, COLOR_INCREMENT)} />
      <View
        style={{
          ...style.colorBox,
          backgroundColor: `rgb(${Red}, ${Green}, ${Blue})`,
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

export default SquareScreen;
