import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CommentBox = () => {
  const [comment, setComment] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={setComment}
        value={comment}
        placeholder="Leave a comment"
        multiline={true}
        numberOfLines={4} // Adjust based on your preference
        textAlignVertical="top" // Ensures text starts from the top
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 3,
    marginTop: 20, 
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#7689AB',
    borderRadius: 10,
    padding: 15,
    paddingTop: 15, 
    fontSize: 16, 
    minHeight: 100
  }
});

export default CommentBox;
