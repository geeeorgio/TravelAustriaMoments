import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import type {
  FlatList as FlatListType,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { Dimensions, Image, ScrollView, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
  PlaceScrollItem,
  PlacesList,
  RouteActions,
  RouteProgressIndicator,
} from 'src/components';
import { GUIDE, PLACES_LIST } from 'src/constants';
import type { HomeStackNavigationProp, LocationObjectType } from 'src/types';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH;

const RoutesScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const flatListRef = useRef<FlatListType<any>>(null);

  const [selectedLocation, setSelectedLocation] =
    useState<LocationObjectType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visitedIndices, setVisitedIndices] = useState<Set<number>>(new Set());

  const handleChooseLocation = (location: LocationObjectType) => {
    setSelectedLocation(location);
    setCurrentIndex(0);
    setVisitedIndices(new Set());
  };

  const handleBackPress = () => {
    setSelectedLocation(null);
    setCurrentIndex(0);
    setVisitedIndices(new Set());
  };

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!selectedLocation) return;
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);
    const maxIndex = selectedLocation.list.length - 1;
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
  };

  const handleNextLocation = () => {
    if (!selectedLocation || currentIndex >= selectedLocation.list.length - 1)
      return;

    handleMarkAsVisited();

    const nextIndex = currentIndex + 1;
    flatListRef.current?.scrollToIndex({
      index: nextIndex,
      animated: true,
    });
  };

  const handleMarkAsVisited = () => {
    setVisitedIndices((prev) => {
      if (prev.has(currentIndex)) return prev;
      const next = new Set(prev);
      next.add(currentIndex);
      return next;
    });
  };

  const handleGetRandomLocation = () => {
    navigation.navigate('RandomPlaceScreen');
  };

  const handleOpenPress = (item: any) => {
    navigation.navigate('PlaceDetailsScreen', { item });
  };

  const handleFavouritePress = (item: any) => {
    // TODO: Add to favourites
    console.log('Add to favourites:', item.id);
  };

  const totalLocations = selectedLocation?.list.length || 0;
  const isLastIndex = currentIndex === totalLocations - 1;
  const isCurrentVisited = visitedIndices.has(currentIndex);
  const isRouteCompleted =
    totalLocations > 0 && visitedIndices.size === totalLocations;

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      {selectedLocation ? (
        <>
          <CustomHeader
            title={selectedLocation.id}
            onBackPress={handleBackPress}
            extraTextStyle={styles.header}
          />
          <RouteProgressIndicator
            totalSteps={totalLocations}
            currentIndex={currentIndex}
            visitedIndices={visitedIndices}
          />
        </>
      ) : (
        <CustomText extraStyle={styles.title}>
          Choose a route for your trip!
        </CustomText>
      )}

      {selectedLocation ? (
        isRouteCompleted ? (
          <>
            <View style={styles.completionContainer}>
              <View style={styles.completionImageContainer}>
                <Image
                  source={GUIDE.routes}
                  style={styles.completionImage}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.completionTextContainer}>
                <CustomText extraStyle={styles.completionTitle}>
                  You completed the route!
                </CustomText>
                <CustomText extraStyle={styles.completionDescription}>
                  Get The Random iconic place around Austria
                </CustomText>
              </View>
            </View>
            <CustomButton
              variant="red"
              onPress={handleGetRandomLocation}
              extraStyle={styles.randomLocationButton}
            >
              <CustomText extraStyle={styles.randomLocationButtonText}>
                Get random location!
              </CustomText>
            </CustomButton>
          </>
        ) : (
          <>
            <PlacesList
              direction="horizontal"
              data={selectedLocation.list}
              handleOpenPress={handleOpenPress}
              handleFavouritePress={handleFavouritePress}
              onScrollEnd={handleScrollEnd}
              listRef={flatListRef}
            />

            <RouteActions
              onMarkAsVisited={handleMarkAsVisited}
              onNextLocation={handleNextLocation}
              isLastStep={isLastIndex}
              isCurrentVisited={isCurrentVisited}
            />
          </>
        )
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
              btnText="Go"
            />
          ))}
        </ScrollView>
      )}
    </CustomScreenWrapper>
  );
};

export default RoutesScreen;
