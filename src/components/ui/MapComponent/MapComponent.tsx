import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import MapIcon from '../CustomIcons/MapIcon';

import { COLORS, darkMapStyle } from 'src/constants';
import { hp, wp } from 'src/utils';

interface MapComponentProps {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  title?: string;
  description?: string;
  fullScreen?: boolean;
  extraStyle?: StyleProp<ViewStyle>;
}

const MapComponent = ({
  coordinates,
  title,
  description,
  fullScreen = false,
  extraStyle,
}: MapComponentProps) => {
  return (
    <View style={[styles.container, extraStyle]}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={darkMapStyle}
        toolbarEnabled={false}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={coordinates} title={title}>
          <MapIcon
            color={COLORS.black}
            width={wp(33)}
            fill={COLORS.red}
            height={hp(55)}
          />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(200),
    borderRadius: wp(16),
    overflow: 'hidden',
  },
  fullScreen: {
    height: '100%',
    borderRadius: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapComponent;
