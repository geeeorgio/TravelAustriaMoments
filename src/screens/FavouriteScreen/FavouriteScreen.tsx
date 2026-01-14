import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomScreenWrapper,
  CustomText,
  PlacesList,
} from 'src/components';
import { CAPIBARA } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import { usePlaceActions } from 'src/hooks/usePlaceActions';
import type { MainStackNavigationProp } from 'src/types';

const FavouriteScreen = () => {
  const { contextFavourites } = useGameContext();
  const { handleOpenPress, handleFavouriteToggle } = usePlaceActions();
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleSearchPlace = () => {
    navigation.navigate('HomeStack', { screen: 'LocationsScreen' });
  };

  const animatedValues = useRef(
    Array.from({ length: 10 }).map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    const animate = () => {
      const animations = animatedValues.map((val) => {
        return Animated.sequence([
          Animated.timing(val, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(val, {
            toValue: 0.2,
            duration: 800,
            useNativeDriver: true,
          }),
        ]);
      });

      Animated.loop(Animated.stagger(150, [...animations].reverse())).start();
    };

    if (contextFavourites.length === 0) {
      animate();
    }
  }, [contextFavourites.length, animatedValues]);

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      {contextFavourites.length > 0 ? (
        <>
          <CustomText extraStyle={styles.title}>
            Your saved locations
          </CustomText>
          <PlacesList
            data={contextFavourites}
            handleOpenPress={handleOpenPress}
            handleFavouritePress={handleFavouriteToggle}
          />
        </>
      ) : (
        <View style={styles.noFavouritesContainer}>
          <CustomText extraStyle={styles.noFavouritesText}>
            No saved places yet
          </CustomText>
          <CustomButton
            onPress={handleSearchPlace}
            variant="red"
            extraStyle={styles.searchButton}
          >
            <CustomText extraStyle={styles.searchButtonText}>
              Search the place!
            </CustomText>
          </CustomButton>
          <View style={styles.capibaraContainer}>
            <Image
              source={CAPIBARA}
              style={styles.capibaraImage}
              resizeMode="contain"
            />
            <View style={styles.capibaraDotsContainer}>
              {animatedValues.map((val, index) => (
                <Animated.View
                  key={index}
                  style={[
                    styles.capibaraDot,
                    {
                      opacity: val,
                    },
                  ]}
                />
              ))}
            </View>
          </View>
        </View>
      )}
    </CustomScreenWrapper>
  );
};

export default FavouriteScreen;
