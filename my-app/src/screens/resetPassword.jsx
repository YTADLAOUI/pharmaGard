
import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import InputPassword from '../components/input'
import InputConfirmPassword from '../components/input'
import ButtonReset from '../components/button'

const forgetPassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  return (
 <SafeAreaView style={styles.container} >
  <View>
      <Image style={styles.image} source={require('../../assets/pharma.png')} />
      </View>
  <Text style={{marginBottom:20,color:'#fff',fontWeight:'bold'}}>Reset password</Text>
  <InputPassword
    placeholder="Password"
     onChangeText={password=>setPassword(password)}
     value={password}
    style={styles.input}/>
  <InputConfirmPassword
    placeholder="Confirm password"
     onChangeText={confirmPassword=>setConfirmPassword(confirmPassword)}
     value={confirmPassword}
    style={styles.input}/>
      <View style={styles.login}>
        <TouchableOpacity>
          <Text style={styles.forgot}>Go to login → </Text>
        </TouchableOpacity>
      </View>
    <ButtonReset title={'Send'}/>
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8dbAe6',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  input:{
    // backgroundColor: '#8dbAe6',
    alignItems: 'center',
    justifyContent: 'center',
  },forgot: {
    fontSize: 15,
    color: '#fff',
  },
  login: {
    width: '80%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  image:{
    width: 300,
    height: 200,
  }
})

export default forgetPassword