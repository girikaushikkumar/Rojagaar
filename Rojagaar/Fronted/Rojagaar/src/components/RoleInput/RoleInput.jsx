import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { horizontalScale, verticalScale } from '../../assets/style/scaling';
import { TextInput } from 'react-native-gesture-handler';

const RoleInput = ({onAddRole}) => {
    const [role,setRole] = useState('');

    const handleAddRole = () => {
        if(role.trim() !== '') {
            onAddRole(role);
            setRole('');
        }
    };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter role"
        value={role}
        onChangeText={text => setRole(text)}
      />
      <Button title="Add" onPress={handleAddRole} />
    </View>
  );
};

export default RoleInput;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        marginBottom:verticalScale(10)
    },
    textInput : {
        flex:1,
        height:verticalScale(40),
        borderColor:'gray',
        borderWidth:horizontalScale(1),
        marginRight:horizontalScale(10),
        paddingHorizontal:horizontalScale(10),
    }
});