import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.transparentBckgd,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: hp(60),
    left: wp(24),
    width: wp(44),
    height: wp(44),
    borderRadius: wp(22),
    backgroundColor: COLORS.blackBckgd,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    borderWidth: wp(1),
    borderColor: COLORS.white,
  },
  content: {
    width: '100%',
    paddingHorizontal: wp(16),
  },
});
