import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';

import {
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
  PlaceScrollItem,
  PlacesList,
} from 'src/components';
import { PLACES_LIST } from 'src/constants';
import { usePlaceActions } from 'src/hooks/usePlaceActions';
import type { LocationObjectType } from 'src/types';

const LocationsScreen = () => {
  const { handleOpenPress, handleFavouriteToggle } = usePlaceActions();

  const [selectedLocation, setSelectedLocation] =
    useState<LocationObjectType | null>(null);

  const handleChooseLocation = (location: LocationObjectType) => {
    setSelectedLocation(location);
  };

  const handleBackPress = () => {
    setSelectedLocation(null);
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      {selectedLocation ? (
        <CustomHeader
          title="Choose the location"
          onBackPress={handleBackPress}
        />
      ) : (
        <CustomText extraStyle={styles.title}>
          Choose the category of locations
        </CustomText>
      )}

      {selectedLocation ? (
        <PlacesList
          data={selectedLocation.list}
          handleOpenPress={handleOpenPress}
          handleFavouritePress={handleFavouriteToggle}
        />
      ) : (
        <ScrollView
          style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContentContainer}
          nestedScrollEnabled={true}
        >
          {PLACES_LIST.Locations.map((location) => (
            <PlaceScrollItem
              key={location.id}
              location={location}
              onPress={handleChooseLocation}
            />
          ))}
        </ScrollView>
      )}
    </CustomScreenWrapper>
  );
};

export default LocationsScreen;
