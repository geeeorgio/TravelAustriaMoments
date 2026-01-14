import { Dimensions } from 'react-native';

export const SCREEN_DIMENSIONS = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const SCREEN_WIDTH = SCREEN_DIMENSIONS.width;
export const SCREEN_HEIGHT = SCREEN_DIMENSIONS.height;

export const HORIZONTAL_LIST_GEOMETRY = {
  ITEM_WIDTH: SCREEN_WIDTH,
  SNAP_INTERVAL: SCREEN_WIDTH,
};
