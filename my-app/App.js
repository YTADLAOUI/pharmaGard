import React from 'react';
import Login from './src/screens/login'
import Register from './src/screens/register'
import ForgetPassword from './src/screens/forgetPassword'
import ResetPassword from './src/screens/resetPassword'
import Home from './src/screens/home'
import GoogleMap from './src/screens/googleMap'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
 return(
  <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#8dbAe6', 
       
          },
          headerTintColor: '#fff',}}
        name='Login'   component={Login} />
        <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#8dbAe6', 
       
          },
          headerTintColor: '#fff',}}
        name='Register'  component={Register} />

        <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#8dbAe6', 
       
          },
          headerTintColor: '#fff',}}
        name='Forget password'  component={ForgetPassword} />
        <Stack.Screen 
        options={{
          headerStyle: {
            backgroundColor: '#8dbAe6', 
       
          },
          headerTintColor: '#fff',}}
        name='Reset Pass'  component={ResetPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="GoogleMap" component={GoogleMap} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
 )
}



