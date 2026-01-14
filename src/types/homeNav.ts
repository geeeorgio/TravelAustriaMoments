import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { LocationType, RouteType } from './gamePlay';

export type HomeStackParamsList = {
  HomeScreen: undefined;
  LocationsScreen: undefined;
  RoutesScreen: undefined;
  MapScreen: undefined;
  RandomPlaceScreen: undefined;
  PlaceDetailsScreen: {
    item: LocationType | RouteType;
  };
};

export type HomeStackNavigationProp =
  NativeStackNavigationProp<HomeStackParamsList>;

export const HomeMenuNames = [
  'Locations',
  'Routes',
  'Map',
  'Random place',
] as const;

export type HomeMenuName = (typeof HomeMenuNames)[number];
