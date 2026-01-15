import React, { useRef } from 'react';
import type {
  FlatList as FlatListType,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { FlatList, View } from 'react-native';

import PlaceItem from '../PlaceItem/PlaceItem';

import { styles } from './styles';

import type { LocationType, RouteType } from 'src/types';

interface PlacesListProps {
  data: LocationType[] | RouteType[];
  handleOpenPress: (item: LocationType | RouteType) => void;
  handleFavouritePress: (item: LocationType | RouteType) => void;
  direction?: 'horizontal' | 'vertical';
  onScrollEnd?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  listRef?: React.RefObject<FlatListType<LocationType | RouteType> | null>;
}

const PlacesList = ({
  data,
  handleOpenPress,
  handleFavouritePress,
  direction = 'vertical',
  onScrollEnd,
  listRef,
}: PlacesListProps) => {
  const internalRef = useRef<FlatListType<LocationType | RouteType>>(null);
  const ref = listRef || internalRef;

  const renderItem = ({ item }: { item: LocationType | RouteType }) => {
    if (direction === 'horizontal') {
      return (
        <View style={styles.horizontalItemWrapper}>
          <PlaceItem
            item={item}
            onOpenPress={handleOpenPress}
            onFavouritePress={handleFavouritePress}
          />
        </View>
      );
    }
    return (
      <PlaceItem
        item={item}
        onOpenPress={handleOpenPress}
        onFavouritePress={handleFavouritePress}
      />
    );
  };

  return (
    <FlatList
      ref={ref}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={[
        styles.contentContainer,
        direction === 'horizontal' && {
          gap: 0,
          paddingHorizontal: 0,
          paddingBottom: 0,
        },
      ]}
      style={[styles.list, direction === 'horizontal' && styles.horizontalList]}
      ListFooterComponent={
        direction === 'vertical' ? () => <View style={styles.footer} /> : null
      }
      horizontal={direction === 'horizontal'}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      onMomentumScrollEnd={onScrollEnd}
    />
  );
};

export default PlacesList;
