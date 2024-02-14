
import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import InputEmail from '../components/input'
import ButtonForget from '../components/button'

const forgetPassword = () => {
  const [email, setEmail] = useState('')
  return (
 <SafeAreaView style={styles.container} >
  <View>
      <Image style={styles.image} source={require('../../assets/pharma.png')} />
      </View>
  <Text style={{marginBottom:20,color:'#fff',fontWeight:'bold'}}>Enter your email</Text>
  <InputEmail
    placeholder="Enter your email"
     onChangeText={email=>setEmail(email)}
     value={email}
    style={styles.input}/>
      <View style={styles.login}>
        <TouchableOpacity>
          <Text style={styles.forgot}>Go to login → </Text>
        </TouchableOpacity>
      </View>
    <ButtonForget title={'Send'}/>
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