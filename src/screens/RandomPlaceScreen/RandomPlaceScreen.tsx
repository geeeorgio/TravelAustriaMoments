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
import { usePlaceActions } from 'src/hooks/usePlaceActions';
import type {
  HomeStackNavigationProp,
  LocationType,
  RouteType,
} from 'src/types';
import { getCoordinatesById } from 'src/utils';

const RandomPlaceScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const { handleOpenPress, handleFavouriteToggle } = usePlaceActions();

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
                onFavouritePress={handleFavouriteToggle}
              />
            </View>

            <View style={styles.mapContainer}>
              <MapComponent
                key={randomPlace.id}
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
          <Image
            source={GUIDE.randomPlace}
            style={styles.guideImage}
            resizeMode="contain"
          />

          <View style={styles.contentOverlay}>
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
        </View>
      )}
    </CustomScreenWrapper>
  );
};

export default RandomPlaceScreen;
