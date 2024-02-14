import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Login from './src/screens/login'
import Register from './src/screens/register'
import ForgetPassword from './src/screens/forgetPassword'

export default function App() {
 return(
  <>
    <SafeAreaView style={styles.container} >
      {/* <Login/> */}
      {/* <Register/> */}
       <ForgetPassword/>
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

