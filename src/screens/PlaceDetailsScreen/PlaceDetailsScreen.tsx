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
import { usePlaceActions } from 'src/hooks/usePlaceActions';
import type { HomeStackNavigationProp, HomeStackParamsList } from 'src/types';
import { getCoordinatesById } from 'src/utils';

const PlaceDetailsScreen = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const route =
    useRoute<RouteProp<HomeStackParamsList, 'PlaceDetailsScreen'>>();
  const { handleFavouriteToggle } = usePlaceActions();
  const { item } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  const coordinates = getCoordinatesById(item.location);

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
          onFavouritePress={handleFavouriteToggle}
        />

        <MapComponent
          key={item.id}
          coordinates={coordinates}
          title={item.title}
          description={item.location}
        />
      </ScrollView>
    </CustomScreenWrapper>
  );
};

export default PlaceDetailsScreen;
