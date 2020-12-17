import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const image = [
  {
    title: 'Forest',
  },
  {
    title: 'Beach',
  },
  {
    title: 'Mountain',
  },
];

const ImageScreen = () => {
  return (
    <View>
      {image.map(image => (
        <ImageDetail title={image.title} key={image.title}/>
      ))}
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
