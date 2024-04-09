import {Text, View} from 'react-native';
import React from 'react';
import style from './style';
const ApplicationStatusTabTitle = props => {
  return (
    <View>
      <View>
        <Text style={[style.title, !props.isFocused && style.titleNotFocused]}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default ApplicationStatusTabTitle;
