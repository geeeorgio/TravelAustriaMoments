import type { ImageSourcePropType } from 'react-native';

import type { LocationTypes, RouteTypes } from 'src/constants';

export type LocationNameType = (typeof LocationTypes)[number];
export type RouteNameType = (typeof RouteTypes)[number];

export type LocationType = {
  id: string;
  title: string;
  description: string;
  location: string;
  image: ImageSourcePropType;
};

export type RouteType = {
  id: string;
  title: string;
  description: string;
  location: string;
  image: ImageSourcePropType;
};

export type TipType = {
  id: string;
  title: string;
  description: string;
};

export type LocationObjectType = {
  id: string;
  list: LocationType[];
};

export type GameContextType = {
  contextBackground: ImageSourcePropType;
  //
  isContextOnboardingCompleted: boolean;
  setIsContextOnboardingCompleted: (value: boolean) => void;
  //
  contextFavourites: (LocationType | RouteType)[];
  addContextFavourites: (item: LocationType | RouteType) => void;
  removeFromContextFavourites: (id: string) => void;
  isInFavourites: (id: string) => boolean;
  //
  resetGameData: () => Promise<void>;
};
