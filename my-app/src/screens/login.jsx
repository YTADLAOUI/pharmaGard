import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/input'
import ButtonLogin from '../components/button'
import { StyleSheet,Text,Image, TouchableOpacity,View } from 'react-native';
const login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(email)
  return (
    <SafeAreaView  style={styles.container}>
        <Image style={styles.image} source={require('../../assets/pharma.png')} />
        <Text style={styles.brand}>Pharmacy </Text>
      <View style={styles.input} >
      <Text style={styles.texts}>Email</Text>
      <Input onChangeText={email=>setEmail(email)} value={email} placeholder={"Entre votre email"} />
      <Text style={styles.texts}>Password</Text>
      <Input onChangeText={password=>setPassword(password)} value={password} placeholder={"Entre votre password"} secureTextEntry={true} />
      <View style={styles.forgotPassword}>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      
      <ButtonLogin/>
      <View style={styles.row}>
        <Text style={{color:'#211C6A'}}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => console.log("onPress sign up")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
}
 const styles= StyleSheet.create({
  container: {
    // position:'relative',
    // top: -130,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  brand:{
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input:{
    backgroundColor: '#8dbAe6',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    // padding: 20,
    borderRadius: 20,
  },

  texts:{
    textAlign: "start",
    width: "60%",
    marginBottom: 10,
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  image:{
    width: 300,
    height: 200,
    // backgroundColor: "#fff",

    // marginBottom: 20,
  },
  forgotPassword: {
    width: '90%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  forgot: {
    fontSize: 13,
    color: '#DBF3FA',
  },
  link: {
    fontWeight: 'bold',
    color: '#DBF3FA',
  },
 })

export default login