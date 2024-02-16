import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default PharmacyCard = ({ pharmacy }) => {
  const navigation = useNavigation();

  const handleCardClick = () => {
    // Navigate to Google Map with latitude and longitude
    const { latitude, longitude } = pharmacy;
    console.log('latitude', latitude, 'longitude', longitude)
    navigation.navigate('GoogleMap', { latitude, longitude });
  };

  return (
    <TouchableOpacity onPress={handleCardClick}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Image source={{ uri: pharmacy.images[0] }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{pharmacy.name}</Text>
        <Text>{pharmacy.address}</Text>
        {/* Add other pharmacy details you want to display */}
      </Card>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    borderRadius: 10,
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});