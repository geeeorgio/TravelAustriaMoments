import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  HomeScreen,
  LocationsScreen,
  MapScreen,
  RandomPlaceScreen,
  RoutesScreen,
} from 'src/screens';
import type { HomeStackParamsList } from 'src/types';

const HomeNav = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack = () => {
  return (
    <HomeNav.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <HomeNav.Screen name="HomeScreen" component={HomeScreen} />
      <HomeNav.Screen
        name="LocationsScreen"
        component={LocationsScreen}
        options={{ title: 'Locations' }}
      />
      <HomeNav.Screen name="RoutesScreen" component={RoutesScreen} />
      <HomeNav.Screen name="MapScreen" component={MapScreen} />
      <HomeNav.Screen name="RandomPlaceScreen" component={RandomPlaceScreen} />
    </HomeNav.Navigator>
  );
};

export default HomeStack;
