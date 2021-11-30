import React, { FC, useMemo, useState } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import MapView from "react-native-maps";
import { Marker } from "react-native-maps"
import { useRef } from "react";
export const MainScreen: FC = () => {

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const Baku = {
    latitude: 40.37983,
    longitude: 49.84930,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  const mapRef = useRef(null);
  const goToBaku = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(Baku, 3 * 1000);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        //specify our coordinates.
        initialRegion={Baku}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker coordinate={Baku} />
      </MapView>
      <Button onPress={() => goToBaku()} title="Go to Baku" />
      <Text style={styles.text}>Current latitude: {region.latitude}</Text>
      <Text style={styles.text}>Current longitude: {region.longitude}</Text>
    </View>
  )
}