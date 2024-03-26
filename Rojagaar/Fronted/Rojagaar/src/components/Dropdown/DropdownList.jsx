import { Text, View } from 'react-native';
import React, { useState } from 'react';
import style from './style';
import { Dropdown } from 'react-native-element-dropdown';
const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

const DropdownList = ({placeholderName,value,setValue}) => {
    const [isFocus, setIsFocus] = useState(false);

    
    return (
      <View style={style.container}>
      
        <Dropdown
          style={[style.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={style.placeholderStyle}
          selectedTextStyle={style.selectedTextStyle}
          inputSearchStyle={style.inputSearchStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? placeholderName : '...' }
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
      </View>
    );
};

export default DropdownList;

