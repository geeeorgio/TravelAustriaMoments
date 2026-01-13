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
    paddingTop: hp(30),
    paddingBottom: hp(80),
    paddingHorizontal: wp(33),
    gap: wp(16),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp(12),
    paddingHorizontal: wp(18),
    borderRadius: wp(25),
    borderWidth: wp(1),
    borderColor: COLORS.white,
  },
  buttonFocused: {
    backgroundColor: COLORS.transparentBckgd,
  },
  icon: {
    width: wp(30),
    height: wp(30),
  },
});
