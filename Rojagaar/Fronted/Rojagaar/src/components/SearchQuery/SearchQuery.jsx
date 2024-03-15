import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
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

