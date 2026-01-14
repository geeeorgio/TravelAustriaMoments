import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: sp(16),
    marginBottom: hp(24),
  },
  header: {
    fontSize: sp(16),
    fontFamily: FONTS.Ultra,
  },
  listContainer: {
    width: '100%',
  },
  listContentContainer: {
    paddingHorizontal: wp(16),
    paddingBottom: hp(180),
    gap: hp(20),
  },
});
