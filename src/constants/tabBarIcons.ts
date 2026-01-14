import type { SvgProps } from 'react-native-svg';

import HomeIcon from 'src/components/ui/CustomIcons/HomeIcon';
import LampIcon from 'src/components/ui/CustomIcons/LampIcon';
import MarkIcon from 'src/components/ui/CustomIcons/MarkIcon';
import type { MainStackParamList } from 'src/types';

type IconComponent = React.ComponentType<SvgProps>;

export const TAB_BAR_ICONS: Partial<
  Record<keyof MainStackParamList, IconComponent>
> = {
  HomeStack: HomeIcon,
  FavouriteScreen: MarkIcon,
  TipsScreen: LampIcon,
};
