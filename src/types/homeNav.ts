import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackParamsList = {
  HomeScreen: undefined;
  LocationsScreen: undefined;
  RoutesScreen: undefined;
  MapScreen: undefined;
  RandomPlaceScreen: undefined;
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
