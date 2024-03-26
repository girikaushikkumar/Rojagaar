import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { horizontalScale, verticalScale } from '../../assets/style/scaling';

const DateTimeInput = ({ value, setValue }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || value;
    setShowDatePicker(false);
    setValue(currentDate);
  };

  return (
    <View>
      <TextInput
        style={styles.inputBox}
        value={value.toDateString()}
        placeholder="Choose date here"
        onFocus={() => setShowDatePicker(true)}
      />
      {showDatePicker && (
        <DateTimePicker
          value={value}
          mode="date"
          display="spinner"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateTimeInput;

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: verticalScale(5),
    borderColor: '#887E7E',
    borderWidth: horizontalScale(1),
    backgroundColor: '#eef3f9'
  },
});
