import type { SvgProps } from 'react-native-svg';

import { LampIcon, MarkIcon, HomeIcon } from 'src/components';
import type { MainStackParamList } from 'src/types';

type IconComponent = React.ComponentType<SvgProps>;

export const TAB_BAR_ICONS: Record<keyof MainStackParamList, IconComponent> = {
  HomeStack: HomeIcon,
  FavouriteScreen: MarkIcon,
  TipsScreen: LampIcon,
};
