import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { getFontFamily } from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/style/scaling';

const HeaderText = ({text}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
};

export default HeaderText;

const styles = StyleSheet.create({
    text: {
        flexDirection:'row',
        fontFamily:getFontFamily('Inter',500),
        fontWeight:'bold',
        fontSize:scaleFontSize(34),
        color:'black',
        textAlign:'center'
    },
});