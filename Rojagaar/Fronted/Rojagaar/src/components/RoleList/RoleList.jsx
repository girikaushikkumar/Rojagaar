import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { scaleFontSize, verticalScale } from '../../assets/style/scaling';

const RoleList = ({roles}) => {
  return (
    <ScrollView style={{flex: 1}}>
      {roles.map((role, index) => (
        <Text key={index} style={{fontSize: scaleFontSize(16), marginBottom: verticalScale(5)}}>
          {role}
        </Text>
      ))}
    </ScrollView>
  );
};

export default RoleList;
const styles = StyleSheet.create({});
