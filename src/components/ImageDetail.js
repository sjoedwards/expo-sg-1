import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageDetail;
