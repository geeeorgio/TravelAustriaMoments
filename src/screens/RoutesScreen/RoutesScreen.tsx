import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import type {
  FlatList as FlatListType,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { Image, ScrollView, View } from 'react-native';

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
import { GUIDE, HORIZONTAL_LIST_GEOMETRY, PLACES_LIST } from 'src/constants';
import { usePlaceActions } from 'src/hooks/usePlaceActions';
import type {
  HomeStackNavigationProp,
  LocationObjectType,
  LocationType,
  RouteType,
} from 'src/types';

const { SNAP_INTERVAL } = HORIZONTAL_LIST_GEOMETRY;

const RoutesScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const { handleOpenPress, handleFavouriteToggle } = usePlaceActions();
  const flatListRef = useRef<FlatListType<LocationType | RouteType>>(null);

  const [selectedLocation, setSelectedLocation] =
    useState<LocationObjectType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visitedIndices, setVisitedIndices] = useState<Set<number>>(new Set());
  const [isScrolling, setIsScrolling] = useState(false);

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
    setIsScrolling(false);

    if (!selectedLocation) return;
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / SNAP_INTERVAL);
    const maxIndex = selectedLocation.list.length - 1;
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
  };

  const handleNextLocation = () => {
    if (
      isScrolling ||
      !selectedLocation ||
      currentIndex >= selectedLocation.list.length - 1
    ) {
      return;
    }

    handleMarkAsVisited();
    setIsScrolling(true);

    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);

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
          <View style={styles.completionContainer}>
            <Image
              source={GUIDE.routes}
              style={styles.completionImage}
              resizeMode="contain"
            />

            <View style={styles.completionContentOverlay}>
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
              variant="blue"
              onPress={handleGetRandomLocation}
              extraStyle={styles.randomLocationButton}
            >
              <CustomText extraStyle={styles.randomLocationButtonText}>
                Get random location!
              </CustomText>
            </CustomButton>
          </View>
        ) : (
          <View style={styles.horizontalContentWrapper}>
            <PlacesList
              direction="horizontal"
              data={selectedLocation.list}
              handleOpenPress={handleOpenPress}
              handleFavouritePress={handleFavouriteToggle}
              onScrollEnd={handleScrollEnd}
              listRef={flatListRef}
            />

            <RouteActions
              onMarkAsVisited={handleMarkAsVisited}
              onNextLocation={handleNextLocation}
              isLastStep={isLastIndex}
              isCurrentVisited={isCurrentVisited}
            />
          </View>
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
