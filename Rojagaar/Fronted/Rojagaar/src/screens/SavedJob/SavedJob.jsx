import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FooterMenu from '../../components/Menu/FooterMenu/FooterMenu';
import style from './style';
import globalStyle from '../../assets/style/globalStyle';

const SavedJob = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex,style.container]}>
      <Text>SavedJob</Text>
      <FooterMenu/>
    </SafeAreaView>
  )
};

export default SavedJob;