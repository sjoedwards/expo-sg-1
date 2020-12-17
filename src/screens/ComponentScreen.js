import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const name = "Sam";
  return (
    <View>
      <Text style={styles.largeTextStyle}>
        Getting started with React Native
      </Text>
      <Text style={styles.mediumTextStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  largeTextStyle: {
    fontSize: 45,
  },
  mediumTextStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
