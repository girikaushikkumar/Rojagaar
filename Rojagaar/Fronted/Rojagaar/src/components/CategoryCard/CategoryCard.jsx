import { TouchableOpacity, Image, Text,StyleSheet } from 'react-native';
import React from 'react';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/style/scaling';
import { getFontFamily } from '../../assets/fonts/helper';
import { useNavigation } from '@react-navigation/native';
import Hiring from '../../screens/Hire/Hiring';
import { Routes } from '../../navigation/Routes';

const CategoryCard = ({ imageSource, skill, village }) => {
    const navigation = useNavigation();
    const onPressCard = () => {
      navigation.navigate(Routes.Hiring,{village,skill});
    } 
    return (
      <TouchableOpacity style={styles.card} onPress={onPressCard}>
        <Image source={imageSource} style={styles.img} />
        <Text style={styles.text}>{skill}</Text>
      </TouchableOpacity>
    );
  };

export default CategoryCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        height: verticalScale(120),
        width: horizontalScale(100),
        borderRadius: horizontalScale(8),
        borderWidth: 2,
        borderColor: '#F1F0F0',
      },
      img: {
        height: verticalScale(50),
        width: horizontalScale(50),
        borderRadius: horizontalScale(5),
        marginTop: verticalScale(10),
      },
      text: {
        fontFamily: getFontFamily('Inter', 600),
        justifyContent: 'center',
        color: '#3C3C3C',
        marginTop: verticalScale(15),
        fontSize: scaleFontSize(17),
        fontWeight: 'bold',
      },

});