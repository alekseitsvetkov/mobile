import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { mapGfxStyle } from '_app/constants';

import { s } from './styles';

export const MapScreen = ({ route }) => {
  const currentCity = route.params.item;

  return (
    <MapView
      style={s.map}
      provider={PROVIDER_GOOGLE}
      mapType="standard"
      customMapStyle={mapGfxStyle}
      initialRegion={{
        latitude: Number(currentCity.latitude),
        longitude: Number(currentCity.longitude),
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
      }}
    >
      <Marker
        key={currentCity.id}
        coordinate={{
          latitude: Number(currentCity.latitude),
          longitude: Number(currentCity.longitude),
        }}
      />
    </MapView>
  );
};
