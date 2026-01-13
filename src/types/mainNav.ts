import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { NavigatorScreenParams } from '@react-navigation/native';

import type { HomeStackNavigationProp } from './homeNav';

export type MainStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackNavigationProp>;
  FavouriteScreen: undefined;
  TipsScreen: undefined;
};

export type MainStackNavigationProp =
  BottomTabNavigationProp<MainStackParamList>;
