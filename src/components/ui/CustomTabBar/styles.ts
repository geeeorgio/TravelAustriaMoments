import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: wp(50),
    borderTopRightRadius: wp(50),
    paddingTop: hp(20),
    paddingBottom: hp(80),
    paddingHorizontal: wp(33),
    gap: wp(16),
    borderTopColor: COLORS.newBlueCard3,
    borderTopWidth: wp(1),
    borderLeftColor: COLORS.newBlueCard3,
    borderLeftWidth: wp(1),
    borderRightColor: COLORS.newBlueCard3,
    borderRightWidth: wp(1),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp(12),
    paddingHorizontal: wp(16),
    borderRadius: wp(20),
    borderWidth: wp(1),
    borderColor: COLORS.newBlueCard3,
  },
  buttonFocused: {
    // backgroundColor: COLORS.transparentBckgd,
    borderColor: COLORS.newBlueText,
  },
  icon: {
    width: wp(22),
    height: wp(22),
  },
});
