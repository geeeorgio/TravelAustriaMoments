import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { styles } from './styles';

import { MapIcon, PlaceItem, PlaceModal } from 'src/components';
import { COLORS, darkMapStyle, PLACES_LIST } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import type {
  HomeStackNavigationProp,
  LocationType,
  RouteType,
} from 'src/types';
import { getCoordinatesById, hp, wp } from 'src/utils';

const MapScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const { addContextFavourites, removeFromContextFavourites, isInFavourites } =
    useGameContext();

  const [selectedPlace, setSelectedPlace] = useState<
    LocationType | RouteType | null
  >(null);

  const allPlaces: (LocationType | RouteType)[] = [
    ...PLACES_LIST.Locations.flatMap((category) => category.list),
    ...PLACES_LIST.Routes.flatMap((route) => route.list),
  ];

  const handleMarkerPress = (place: LocationType | RouteType) => {
    setSelectedPlace(place);
  };

  const handleCloseModal = () => {
    setSelectedPlace(null);
  };

  const handleOpenPress = (item: LocationType | RouteType) => {
    setSelectedPlace(null);
    navigation.navigate('PlaceDetailsScreen', { item });
  };

  const handleFavouritePress = (item: LocationType | RouteType) => {
    if (isInFavourites(item.id)) {
      removeFromContextFavourites(item.id);
    } else {
      addContextFavourites(item);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        customMapStyle={darkMapStyle}
        initialRegion={{
          latitude: 47.5,
          longitude: 13.5,
          latitudeDelta: 4,
          longitudeDelta: 4,
        }}
      >
        {allPlaces.map((place) => {
          const coordinates = getCoordinatesById(place.location);
          return (
            <Marker
              key={place.id}
              coordinate={coordinates}
              onPress={() => handleMarkerPress(place)}
            >
              <MapIcon
                color={COLORS.black}
                width={wp(33)}
                fill={COLORS.red}
                height={hp(55)}
              />
            </Marker>
          );
        })}
      </MapView>

      {selectedPlace && (
        <PlaceModal visible={true} onClose={handleCloseModal}>
          <View style={styles.modalContent}>
            <PlaceItem
              item={selectedPlace}
              onOpenPress={handleOpenPress}
              onFavouritePress={handleFavouritePress}
            />
          </View>
        </PlaceModal>
      )}
    </View>
  );
};

export default MapScreen;
