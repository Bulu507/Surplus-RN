import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const defaultParams = {
  loaded: false,
  coordinates: {lat: '', lng: ''},
};

export const useGeoLocation = () => {
  const [location, setLocation] = useState(defaultParams);
  const [hasAccessLocation, setHasAccessLocation] = useState(false);

  const onSuccess = (loc) => {
    setLocation({
      loaded: true,
      coordinates: {lat: loc?.coords?.latitude, lng: loc?.coords?.longitude},
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  const checkPermissionLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission Required',
          message: 'Application needs access to your location',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasAccessLocation(true);
        Geolocation.getCurrentPosition(onSuccess, onError);
      } else {
        console.log('dont have permission location');
        setHasAccessLocation(false);
      }
    } catch (error) {
      console.log('cek error permision location');
    }
  };

  useEffect(() => {
    checkPermissionLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {location, hasAccessLocation, checkPermissionLocation};
};
