import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(8),
    marginBottom: hp(12),
  },
  leftButton: {
    width: wp(34),
    height: wp(34),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: wp(1),
    borderColor: COLORS.white,
    borderRadius: wp(17),
  },
  right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: sp(18),
  },
});
