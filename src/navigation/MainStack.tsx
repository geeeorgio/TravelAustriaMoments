import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';

import { CustomTabBar } from 'src/components';
import { FavouriteScreen, TipsScreen } from 'src/screens';
import type { MainStackParamList } from 'src/types';

const MainNav = createBottomTabNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <MainNav.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'shift',
        sceneStyle: {
          backgroundColor: 'transparent',
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName="HomeStack"
    >
      <MainNav.Screen name="TipsScreen" component={TipsScreen} />
      <MainNav.Screen name="HomeStack" component={HomeStack} />
      <MainNav.Screen name="FavouriteScreen" component={FavouriteScreen} />
    </MainNav.Navigator>
  );
};

export default MainStack;
