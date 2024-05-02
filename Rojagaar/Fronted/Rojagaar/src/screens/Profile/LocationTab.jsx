import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, PermissionsAndroid, Button, StatusBar, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { AuthContext } from '../../context/authContext';
import { updateLocation } from '../../api/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocationTab = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);
  const [address, setAddress] = useState(null);
  const [userState,setUserState] = useContext(AuthContext);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Deny',
          buttonPositive: 'Allow',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn('Error requesting location permission:', err);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // console.log('Latitude:', latitude, 'Longitude:', longitude);
        fetchAddress(latitude, longitude);
      },
      (error) => {
        console.error('Error getting current location:', error);
        setError('Error getting current location. Please try again.');
      }
    );
  };

  const fetchAddress = (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.address) {
          setAddress(data.address);
          setCity(data.address.city);
        } else {
          setError('Address not found in response data');
        }
      })
      .catch((error) => {
        console.error('Error fetching address:', error);
        setError('Error fetching address. Please try again.');
      });
  };

  const setLocation = async() => {
    try {
        const response = await updateLocation(
            userState.user.userName,
            address.village,
            address.county,
            address.tourism,
            address.road,
            address.state,
            address.postcode,
            address.country
        );
        if (response.status === 200) {
            const responseData = {
              user: response.data,
              token: userState.token,
            };
            setUserState(responseData);
            await AsyncStorage.setItem('@auth', JSON.stringify(responseData));
            Alert.alert('Location Update successfully');
          }
    } catch (error) {
        console.log(error);
        Alert.alert('something went wrong');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location Information</Text>
      <View style={styles.buttonContainer}>
        <Button title="Use Current Location" onPress={requestLocationPermission} />
      </View>
      <View style={styles.addressContainer}>
        {city && <Text style={styles.addressText}>City: {city}</Text>}
        {address && (
          <>
          <Text style={styles.addressText}>Road: {address.village}</Text>
            <Text style={styles.addressText}>Road: {address.road}</Text>
            <Text style={styles.addressText}>Country: {address.tourism}</Text>
            <Text style={styles.addressText}>Road: {address.road}</Text>
            <Text style={styles.addressText}>Country: {address.county}</Text>
            <Text style={styles.addressText}>Road: {address.state}</Text>
            <Text style={styles.addressText}>Country: {address.country}</Text>
          </>
        )}
        {error && <Text style={styles.errorText}>Error: {error}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Update Location" onPress={setLocation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  addressContainer: {
    marginTop: 16,
  },
  addressText: {
    fontSize: 16,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginTop: 8,
  },
});

export default LocationTab;
