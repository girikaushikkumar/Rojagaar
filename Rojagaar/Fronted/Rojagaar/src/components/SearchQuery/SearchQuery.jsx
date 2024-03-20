import { TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { style } from './style';

const SearchQuery = () => {
    const [searchQuery,setSearchQuery] = useState('');

    const handleSearch = () => {

    }
  return (
    <View style={style.container}>
       <TextInput
         placeholder='Search....'
         value={searchQuery}
         onChangeText={setSearchQuery}
         onSubmitEditing={handleSearch}
       />
    </View>
  )
};

export default SearchQuery;

