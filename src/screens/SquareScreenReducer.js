import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const colorReducer = (state, action, color) => ({
  ...state,
  [color]: state[color] + action.amount,
});

const SquareScreen = () => {
  const reducer = (state, action) => {
    switch (action.colorToChange) {
      case "Red":
        return colorReducer(state, action, "Red");
      case "Green":
        return colorReducer(state, action, "Green");
      case "Blue":
        return colorReducer(state, action, "Blue");
      default:
        return state;
    }
  };

  const [{ Red, Green, Blue }, dispatch] = useReducer(reducer, {
    Red: 0,
    Green: 0,
    Blue: 0,
  });
  // const setColor = (color, change) => {
  //   switch (`${color}`.toLowerCase()) {
  //     case "Red":
  //       console.log(color, change);
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       return;
  //     case "Green":
  //       green + change > 255 || green + change < 0
  //         ? null
  //         : setGreen(green + change);
  //       return;
  //     case "Blue":
  //       blue + change > 255 || blue + change < 0
  //         ? null
  //         : setBlue(blue + change);
  //       return;
  //     case "default":
  //       return;
  //   }
  // };

  const counterProps = (name, value, increment) => {
    return {
      name,
      value,
      onIncrease: () => dispatch({ colorToChange: name, amount: increment }),
      onDecrease: () =>
        dispatch({ colorToChange: name, amount: -1 * increment }),
    };
  };

  return (
    <View>
      <ColorCounter {...counterProps("Red", Red, COLOR_INCREMENT)} />
      <ColorCounter {...counterProps("Blue", Blue, COLOR_INCREMENT)} />
      <ColorCounter {...counterProps("Green", Green, COLOR_INCREMENT)} />
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
