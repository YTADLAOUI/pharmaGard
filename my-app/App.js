import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Login from './src/screens/login'

export default function App() {
 return(
  <>
    <SafeAreaView style={styles.container} >
      <Login/>
    </SafeAreaView>
  </>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8dbAe6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

