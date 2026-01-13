import type { ImageSourcePropType } from 'react-native';

import type { LocationTypes, RouteTypes } from 'src/constants';

export type LocationType = (typeof LocationTypes)[number];
export type RouteType = (typeof RouteTypes)[number];

export type GameContextType = {
  contextBackground: ImageSourcePropType;
  //
  isContextOnboardingCompleted: boolean;
  setIsContextOnboardingCompleted: (value: boolean) => void;
  //
  contextFavourites: [];
  addContextFavourites: (id: string) => void;
  removeFromContextFavourites: (id: string) => void;
  //
  resetGameData: () => Promise<void>;
};
