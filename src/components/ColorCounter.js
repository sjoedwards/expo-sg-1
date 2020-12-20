import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ColorScreen = ({ name, value, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{value}</Text>
      <Button onPress={onIncrease} title={`Increase ${name}`} />
      <Button onPress={onDecrease} title={`Decrease ${name}`} />
    </View>
  );
};

const style = StyleSheet.create({});

export default ColorScreen;
