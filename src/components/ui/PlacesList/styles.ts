import { Dimensions, StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
  contentContainer: {
    gap: wp(16),
    paddingBottom: hp(160),
  },
  list: {
    width: '100%',
  },
  footer: {
    height: hp(20),
  },
  horizontalList: {
    flexGrow: 0,
    width: '100%',
  },
  horizontalItemWrapper: {
    width: SCREEN_WIDTH,
    paddingVertical: hp(10),
    alignItems: 'center',
  },
});
