import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, ScrollView, Button, StyleSheet, TouchableOpacity } from 'react-native';
import PharmacyCard from './pharmacyCard';
import data from '../helpers/data';
const Home = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [showEnGuard, setShowEnGuard] = useState(true);

  useEffect(() => {
    (async () => {
      console.log(data, "data");
      try {
        const res = await axios.get('http://10.0.2.2:3000/api/user');
        console.log(res.data);

        if (res.data === undefined) return navigation.navigate('Login');

        console.log(res.data);
        setMessage(res.data.username);
      } catch (err) {
        console.log(err);
        // navigation.navigate('Login');
      }
    })();
  }, []);

  // Filter pharmacies based on the showEnGuard state
  const filteredPharmacies = data.filter(pharmacy => showEnGuard ? pharmacy.onGuard : !pharmacy.onGuard);

  return (
    <SafeAreaView>
      
      <View style={commonStyles.buttonContainer}>
        {/* "En Guard" button */}
        <TouchableOpacity
          style={[
            commonStyles.button,
            showEnGuard && commonStyles.activeButton,
          ]}
          onPress={() => setShowEnGuard(true)}
        >
          <Text style={[commonStyles.buttonText, showEnGuard && commonStyles.activeButtonText]}>En Guard</Text>
        </TouchableOpacity>

        {/* "Others" button */}
        <TouchableOpacity
          style={[
            commonStyles.button,
            !showEnGuard && commonStyles.activeButton,
          ]}
          onPress={() => setShowEnGuard(false)}
        >
          <Text style={[commonStyles.buttonText, !showEnGuard && commonStyles.activeButtonText]}>Others</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View>
          {filteredPharmacies.map((pharmacy) => (
            <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const commonStyles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,   
    borderColor: 'green',  
  },
  buttonText: {
    fontSize: 16,
  },
  activeButton: {
    backgroundColor: 'green',  
  },
  activeButtonText: {
    color: 'white',  
  },
});

export default Home;
