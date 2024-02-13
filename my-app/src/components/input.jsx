
import React, { useState } from 'react'
import {  StyleSheet, TextInput,TouchableOpacity,View,Text } from 'react-native'

export default function input(
  {onChangeText, value, placeholder, secureTextEntry}
) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      secureTextEntry={!showPassword && secureTextEntry}
    />
     {secureTextEntry && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      )}
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    borderColor: 'white',
    color: 'black',
  },
})

 