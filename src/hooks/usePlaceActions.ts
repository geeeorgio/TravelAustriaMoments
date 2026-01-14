import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

import { useGameContext } from './useGameContext';

import type {
  HomeStackNavigationProp,
  LocationType,
  RouteType,
} from 'src/types';

export const usePlaceActions = () => {
  const navigation = useNavigation<HomeStackNavigationProp>();
  const { addContextFavourites, removeFromContextFavourites, isInFavourites } =
    useGameContext();

  const handleOpenPress = useCallback(
    (item: LocationType | RouteType) => {
      navigation.navigate('PlaceDetailsScreen', { item });
    },
    [navigation],
  );

  const handleFavouriteToggle = useCallback(
    (item: LocationType | RouteType) => {
      if (isInFavourites(item.id)) {
        removeFromContextFavourites(item.id);
      } else {
        addContextFavourites(item);
      }
    },
    [isInFavourites, addContextFavourites, removeFromContextFavourites],
  );

  return { handleOpenPress, handleFavouriteToggle, isInFavourites };
};
