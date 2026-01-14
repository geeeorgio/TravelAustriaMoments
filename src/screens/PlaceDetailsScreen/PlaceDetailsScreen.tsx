import type { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';

import {
  CustomHeader,
  CustomScreenWrapper,
  MapComponent,
  PlaceItem,
} from 'src/components';
import type { HomeStackNavigationProp, HomeStackParamsList } from 'src/types';

const PlaceDetailsScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const route =
    useRoute<RouteProp<HomeStackParamsList, 'PlaceDetailsScreen'>>();
  const { item } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  const getCoordinates = () => {
    return {
      latitude: 48.2082,
      longitude: 16.3738,
    };
  };

  const { latitude, longitude } = getCoordinates();

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomHeader title={item.title} onBackPress={handleBackPress} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <PlaceItem
          item={item}
          onOpenPress={() => {}}
          onFavouritePress={() => {}}
        />

        <MapComponent
          coordinates={{ latitude, longitude }}
          title={item.title}
          description={item.location}
        />
      </ScrollView>
    </CustomScreenWrapper>
  );
};

export default PlaceDetailsScreen;
