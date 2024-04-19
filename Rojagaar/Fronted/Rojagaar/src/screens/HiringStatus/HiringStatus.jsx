import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import globalStyle from '../../assets/style/globalStyle';
import HeaderText from '../../components/HeaderText/HeaderText';

const HiringStatus = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex]}>
      <HeaderText text={'Status'}/>
      
    </SafeAreaView>
  );
};

export default HiringStatus;

const styles = StyleSheet.create({});