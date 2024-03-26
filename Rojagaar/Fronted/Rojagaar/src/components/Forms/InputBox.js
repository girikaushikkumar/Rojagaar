import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { horizontalScale,scaleFontSize, verticalScale } from "../../assets/style/scaling";

const InputBox = ({
  inputTitle,
  autoComplete,
  keyboardType,
  secureTextEntry = false,
  value,
  setValue,
  width,
  height,
  fontSize,
}) => {
  return (
    <View>
      <TextInput
        style={[styles.inputBox,{width,height,fontSize}]}
        placeholder={inputTitle}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#FFFFFF",
    borderRadius:verticalScale(5),
    borderColor:'#887E7E',
    borderWidth:horizontalScale(1),
    backgroundColor:'#eef3f9'
  },
});

export default InputBox;