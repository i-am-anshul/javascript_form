import React from 'react';

import {Text, TextInput, View, StyleSheet} from 'react-native';

export const Form = (props) => {
  return (
    <View style={styles.parentView}>
      <View style={styles.rowView}>
        <Text>Name </Text>
        <TextInput
          placeholder="Anshul Sharma"
          style={styles.input}
          onChangeText={(value) => {
            props.onTextChange(props.index,"name",value);
          }}
        />
      </View>
      <View style={styles.rowView}>
        <Text>Email </Text>
        <TextInput
          placeholder="abc@xyz.com"
          style={styles.input}
          onChangeText={(value) => {
            props.onTextChange(props.index,"email",value);
          }}
        />
      </View>
      <View style={styles.rowView}>
        <Text>DOB </Text>
        <TextInput
          placeholder="00-00-0000"
          style={styles.input}
          onChangeText={(value) => {
            props.onTextChange(props.index,"dob",value);
          }}
        />
      </View>
      <View style={styles.rowView}>
        <Text>PhoneNo </Text>
        <TextInput
          placeholder="1234567890"
          style={styles.input} 
          onChangeText={(value) => {
            props.onTextChange(props.index,"phno",value);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    width: 70,
    height: 200,
    backgroundColor: "white"
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    margin: 10,
    width: 100,
    height: 40,
    backgroundColor: "gray",
    color: "white",
  },
  parentView: {
    borderColor: "black",
    borderWidth: 2,
  },
});
