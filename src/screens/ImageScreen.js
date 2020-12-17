import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const image = [
  {
    title: "Forest",
    imageSource: require("../../assets/forest.jpg"),
    score: 1,
  },
  {
    title: "Beach",
    imageSource: require("../../assets/beach.jpg"),
    score: 5,
  },
  {
    title: "Mountain",
    imageSource: require("../../assets/mountain.jpg"),
    score: 10,
  },
];

const ImageScreen = () => {
  return (
    <View>
      {image.map((image) => (
        <ImageDetail
          title={image.title}
          key={image.title}
          imageSource={image.imageSource}
          score={image.score}
        />
      ))}
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
