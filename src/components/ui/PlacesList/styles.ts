import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  contentContainer: {
    gap: wp(16),
    paddingBottom: hp(100),
  },
  list: {
    width: '100%',
  },
  footer: {
    height: hp(20),
  },
});
