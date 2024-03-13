import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/style/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const NamingAvatar = ({name, avatarSize, textSize, padding}) => {
    const getName = (name) =>{
        const tempName = name.split(' ');
        const initialName = tempName.map((word) => word.charAt(0).toUpperCase()).join('');
        return initialName;
    }
  return (
    <View
      style={[
        styles.container, 
        {
          width: horizontalScale(avatarSize), 
          height: horizontalScale(avatarSize),
          padding: horizontalScale(padding)
        }
      ]}
    >
      <Text style={[styles.text, {fontSize: scaleFontSize(textSize)}]}>{getName(name)}</Text>
    </View>
  )
};

export default NamingAvatar;

const styles = StyleSheet.create({
    container: {
        borderRadius: horizontalScale(59),
        borderColor: 'green',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:horizontalScale(15),
        marginTop:verticalScale(9)
    },
    text: {
        color: '#000000',
        fontFamily: getFontFamily('Inter', '900'),
    }
});