import React, { useState } from 'react';
import {StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from './src/components/input'
export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(email)
  return (
    <SafeAreaView style={styles.container}>
      <Input onChangeText={email=>setEmail(email)} value={email} placeholder={"Entre votre email"} />
      <Input onChangeText={password=>setPassword(password)} value={password} placeholder={"Entre votre password"} secureTextEntry={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8db',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
