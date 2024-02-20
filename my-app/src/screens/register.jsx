import React, { useState } from 'react'
import { Image, SafeAreaView,StyleSheet,Text,TouchableOpacity,View } from 'react-native'
import InputUsername from '../components/input'
import InputEmail from '../components/input'
import InputPassword from '../components/input'
import InputConfirmPassword from '../components/input'
import ButtonRegister from '../components/button'
import axios from 'axios'

const register = ({navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [username,setusername ] = useState('')
const regiser = () => {
  console.log(email,password,username)
  axios.post('http://10.0.2.2:3000/api/register',{email,password,confirmPassword,username},{'Content-Type': 'application/json'}).then((res) => {
    console.log(res.data)
    navigation.navigate('Login')
  }).catch((err) => { console.log(err)})

}

  return (
    <SafeAreaView style={styles.container} >  
      <View>
      <Image style={styles.image} source={require('../../assets/pharma.png')} />
      </View>
      <View style={styles.input}> 
        <Text style={{marginBottom:20,color:'#fff',fontWeight:'bold'}}>Entre your information</Text>
      <InputUsername placeholder={'Entre your username'} onChangeText={username=>setusername(username)} value={username} />
      <InputEmail placeholder={'Entre your Email'} onChangeText={email=>setEmail(email)} value={email}/>
      <InputPassword  placeholder={'Entre your password'} secureTextEntry={true} onChangeText={password=>setPassword(password)} value={password}/>
      <InputConfirmPassword  placeholder={'confirm password'} secureTextEntry={true} onChangeText={confirmPassword=>setConfirmPassword(confirmPassword)} value={confirmPassword}/>
      <View style={styles.login}>
        <TouchableOpacity>
          <Text  onPress={() => navigation.navigate('Login')} style={styles.forgot}>Go to login → </Text>
        </TouchableOpacity>
      </View>
      <ButtonRegister title={'register'} onPress={regiser}/>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8dbAe6',
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'space-around',
    width: "100%",
  },
  password:{
    marginBottom: 20,

  },
  forgot: {
    fontSize: 15,
    color: '#fff',
  },
  login: {
    width: '80%',
    alignItems: 'flex-end',
    marginBottom: 24,
  }
  ,input:{
    backgroundColor: '#8dbAe6',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    borderRadius: 20,
  },
  image:{
    width: 300,
    height: 200,
  }
});
export default register