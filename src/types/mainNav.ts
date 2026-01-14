import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { NavigatorScreenParams } from '@react-navigation/native';

import type { HomeStackParamsList } from './homeNav';

export type MainStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamsList>;
  FavouriteScreen: undefined;
  TipsScreen: undefined;
  MapsScreen: undefined;
};

export type MainStackNavigationProp =
  BottomTabNavigationProp<MainStackParamList>;
