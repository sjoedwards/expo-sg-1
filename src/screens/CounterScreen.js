import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import counterReducer from "../reducers/counterReducer";

const CounterScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_COUNT":
        return counterReducer(state, action, 3, 0)("count");
      default:
        return state;
    }
  };
  const [{ count }, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "CHANGE_COUNT", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "CHANGE_COUNT", payload: -1 });
        }}
      />
      <Text>Current Count:{count}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;
