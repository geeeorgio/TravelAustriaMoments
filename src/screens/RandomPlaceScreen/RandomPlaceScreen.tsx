import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
  MapComponent,
  PlaceItem,
} from 'src/components';
import { GUIDE, PLACES_LIST } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import type {
  HomeStackNavigationProp,
  LocationType,
  RouteType,
} from 'src/types';
import { getCoordinatesById } from 'src/utils';

const RandomPlaceScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const { addContextFavourites, removeFromContextFavourites, isInFavourites } =
    useGameContext();

  const [randomPlace, setRandomPlace] = useState<
    LocationType | RouteType | null
  >(null);

  const allPlaces: (LocationType | RouteType)[] = [
    ...PLACES_LIST.Locations.flatMap((category) => category.list),
    ...PLACES_LIST.Routes.flatMap((route) => route.list),
  ];

  const getRandomPlace = (): LocationType | RouteType => {
    const randomIndex = Math.floor(Math.random() * allPlaces.length);
    return allPlaces[randomIndex];
  };

  const handleGetRandomPlace = () => {
    setRandomPlace(getRandomPlace());
  };

  const handleGetAnotherPlace = () => {
    setRandomPlace(getRandomPlace());
  };

  const handleBackPress = () => {
    if (randomPlace) {
      setRandomPlace(null);
    } else {
      navigation.goBack();
    }
  };

  const handleOpenPress = (item: LocationType | RouteType) => {
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
    <CustomScreenWrapper extraStyle={styles.container}>
      {randomPlace ? (
        <>
          <CustomHeader
            title="Your random place"
            onBackPress={handleBackPress}
          />

          <View style={styles.content}>
            <View style={styles.cardContainer}>
              <PlaceItem
                item={randomPlace}
                onOpenPress={handleOpenPress}
                onFavouritePress={handleFavouritePress}
              />
            </View>

            <View style={styles.mapContainer}>
              <MapComponent
                coordinates={getCoordinatesById(randomPlace.location)}
                title={randomPlace.title}
                extraStyle={styles.map}
              />
            </View>

            <CustomButton
              variant="red"
              onPress={handleGetAnotherPlace}
              extraStyle={styles.button}
            >
              <CustomText extraStyle={styles.buttonText}>
                Get another place
              </CustomText>
            </CustomButton>
          </View>
        </>
      ) : (
        <View style={styles.startContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={GUIDE.randomPlace}
              style={styles.guideImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.textContainer}>
            <CustomText extraStyle={styles.startTitle}>
              Can't decide?
            </CustomText>
            <CustomText extraStyle={styles.startDescription}>
              Get a random location and discover something new nearby.
            </CustomText>
          </View>

          <CustomButton
            variant="red"
            onPress={handleGetRandomPlace}
            extraStyle={styles.button}
          >
            <CustomText extraStyle={styles.buttonText}>Get!</CustomText>
          </CustomButton>
        </View>
      )}
    </CustomScreenWrapper>
  );
};

export default RandomPlaceScreen;
