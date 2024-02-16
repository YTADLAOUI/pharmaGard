import axios from 'axios';

import data from '../helpers/data';
import React, { useEffect, useState } from 'react'
import { SafeAreaView,Text,View } from 'react-native';

import PharmacyCard from './pharmacyCard';


const home = ({navigation}) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    (()=>{
      console.log(data, "data");
      axios.get('http://10.0.2.2:3000/api/user').then((res) => {
        console.log(res.data)
        if(res.data === undefined) return navigation.navigate('Login')
        console.log(res.data)
        setMessage(res.data.username)
      }).catch((err) => { console.log(err) 
      // navigation.navigate('Login')
    })
    })()
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text>
        Pharmacy En Guard
        </Text>
      </View>
      <View>
      {data.map((pharmacy) => (
        <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
      ))}
    </View>
    </SafeAreaView>
  )
}

export default home