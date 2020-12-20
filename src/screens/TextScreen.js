import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={style.input}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      {password.length < 10 && (
        <Text>Password must be at least 9 characters</Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
