import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const randomRgb = () => {
  const singleRandomNumber = () => Math.floor(Math.random() * 256);
  return `rgb(${singleRandomNumber()}, ${singleRandomNumber()}, ${singleRandomNumber()})`;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={({ item }) => item}
        renderItem={({ item }) => (
          <View style={{ ...style, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  height: 100,
  width: 100,
});

export default ColorScreen;
