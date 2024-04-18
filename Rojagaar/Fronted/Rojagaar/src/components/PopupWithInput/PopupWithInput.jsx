import React, { useState } from 'react';
import { View, Modal, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

const PopupWithInput = ({ visible, onClose, onSubmit }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Call the onSubmit callback with the input value
    onSubmit(description);
    
    // Clear the input field
    setDescription('');
    // Close the modal
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
            <TextInput
              placeholder="Enter Problem Statement"
              value={description}
              onChangeText={setDescription}
              style={{ marginBottom: 10, borderBottomWidth: 1, padding: 5 }}
            />
            <Button title="OK" onPress={handleSubmit} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default PopupWithInput;
