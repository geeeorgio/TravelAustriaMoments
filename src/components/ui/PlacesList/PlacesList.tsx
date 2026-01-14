import React from 'react';
import { FlatList, View } from 'react-native';

import PlaceItem from '../PlaceItem/PlaceItem';

import { styles } from './styles';

import type { LocationType, RouteType } from 'src/types';

interface PlacesListProps {
  data: LocationType[] | RouteType[];
  handleOpenPress: (item: LocationType | RouteType) => void;
  handleFavouritePress: (item: LocationType | RouteType) => void;
}

const PlacesList = ({
  data,
  handleOpenPress,
  handleFavouritePress,
}: PlacesListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem
          item={item}
          onOpenPress={handleOpenPress}
          onFavouritePress={handleFavouritePress}
        />
      )}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => <View style={styles.footer} />}
    />
  );
};

export default PlacesList;
