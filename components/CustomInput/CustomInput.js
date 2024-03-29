import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

function CustomInput() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='placeholder' style={styles.input}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '90%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {},
  });

export default CustomInput;