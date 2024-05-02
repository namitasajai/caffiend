import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const options = [
  "Plenty of outlets", "Free Wi-Fi", "Quiet", "Not too busy", "Pet-friendly",
  "Plenty of seating", "Sustainable", "Quiet corners", "Affordable prices",
  "Vegan options", "Vegetarian options", "Gluten-free"
];

const SelectableButtons = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const toggleOption = (option) => {
    setSelectedOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            selectedOptions[option] ? styles.selected : styles.notSelected
          ]}
          onPress={() => toggleOption(option)}
        >
          <Text style={selectedOptions[option] ? styles.selectedText : styles.notSelectedText}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
  },
  button: {
    margin: 2,
    paddingHorizontal: 12, 
    paddingVertical: 8, 
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#48618F',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '30%',
    marginBottom: 8, 
  },
  selected: {
    backgroundColor: '#48618F',
  },
  selectedText: {
    color: '#FFF',
    fontFamily: "Inter_400Regular", 
    fontSize: 12
  },
  notSelectedText: {
    color: '#000',
    fontFamily: "Inter_400Regular", 
    fontSize: 12
  },
});

export default SelectableButtons;
