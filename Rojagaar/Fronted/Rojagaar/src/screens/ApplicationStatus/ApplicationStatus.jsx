import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../context/authContext';
import globalStyle from '../../assets/style/globalStyle';
import HeaderText from '../../components/HeaderText/HeaderText';
import style from './style';
import {ApplicationStatusTabNavigation} from '../../navigation/MainNavigation ';
const ApplicationStatus = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.container}>
      </View>
      <View style={globalStyle.flex}>
        <ApplicationStatusTabNavigation />
      </View>
    </SafeAreaView>
  );
};

export default ApplicationStatus;
