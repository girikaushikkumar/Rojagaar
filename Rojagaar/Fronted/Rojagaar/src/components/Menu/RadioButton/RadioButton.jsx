import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RadioButton = ({value,setValue}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, label: 'Yes' },
    { id: 2, label: 'No' },
  ];

  const handleSelectOption = (optionId) => {
    setSelectedOption(optionId); // Update the selectedOption state
    // Set value to true if the selected option is "Yes", otherwise set it to false
    setValue(optionId === 1 ? true : false);
  };

  return (
    <View style={styles.container}>
      {options.map(option => (
        <TouchableOpacity
          key={option.id}
          style={styles.optionContainer}
          onPress={() => handleSelectOption(option.id)}
        >
          <View style={styles.radioCircle}>
            {selectedOption === option.id && <View style={styles.selectedRadioCircle} />}
          </View>
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginLeft:20

  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default RadioButton;
