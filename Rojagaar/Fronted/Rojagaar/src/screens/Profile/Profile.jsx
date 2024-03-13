import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';
import { style } from './style';
import globalStyle from '../../assets/style/globalStyle';
const  Profile = ()=> {
  
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex,style.container]}>
      <Text>Profile</Text>
      <FooterMenu/>
    </SafeAreaView>
  )
};

export default Profile;

