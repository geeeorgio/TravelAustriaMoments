import { useNavigation } from '@react-navigation/native';
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
import type { HomeStackNavigationProp, LocationObjectType } from 'src/types';

const RoutesScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();

  const [selectedLocation, setSelectedLocation] =
    useState<LocationObjectType | null>(null);

  const handleChooseLocation = (location: LocationObjectType) => {
    setSelectedLocation(location);
  };

  const handleBackPress = () => {
    setSelectedLocation(null);
    navigation.navigate('RoutesScreen');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      {selectedLocation ? (
        <CustomHeader
          title={selectedLocation.id}
          onBackPress={handleBackPress}
          extraTextStyle={styles.header}
        />
      ) : (
        <CustomText extraStyle={styles.title}>
          Choose a route for your trip!
        </CustomText>
      )}

      {selectedLocation ? (
        <PlacesList
          data={selectedLocation.list}
          handleOpenPress={() => {}}
          handleFavouritePress={() => {}}
        />
      ) : (
        <ScrollView
          style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContentContainer}
          nestedScrollEnabled={true}
        >
          {PLACES_LIST.Routes.map((route) => (
            <PlaceScrollItem
              key={route.id}
              location={route}
              onPress={handleChooseLocation}
            />
          ))}
        </ScrollView>
      )}
    </CustomScreenWrapper>
  );
};

export default RoutesScreen;
