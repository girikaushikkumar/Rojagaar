import React from 'react';
import { TextInput, View } from 'react-native';
import { style } from './style';

const SearchQuery = ({ setSearchQuery }) => {
  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={style.container}>
      <TextInput
        placeholder='Search....'
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default SearchQuery;
