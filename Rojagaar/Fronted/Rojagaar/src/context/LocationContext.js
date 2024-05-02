import { createContext, useEffect, useState } from "react";
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from "react-native";



const LocationContext = createContext();

const LocationProvider = ({children}) => {
    const [location,setLocation] = useState(null);

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
              setLocation(data.address);
            } else {
              setError('Address not found in response data');
            }
          })
          .catch((error) => {
            console.error('Error fetching address:', error);
            setError('Error fetching address. Please try again.');
          });
      };

      return(
        <LocationContext.Provider value={[location,setLocation]}>
            {children}
        </LocationContext.Provider>
      );

      
    
};
export {LocationContext,LocationProvider};