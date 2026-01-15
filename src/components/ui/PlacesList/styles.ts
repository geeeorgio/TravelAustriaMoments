import { StyleSheet } from 'react-native';

import { DESIGN_TOKENS, HORIZONTAL_LIST_GEOMETRY } from 'src/constants';
import { hp, wp } from 'src/utils';

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
    width: '100%',
  },
  horizontalItemWrapper: {
    width: HORIZONTAL_LIST_GEOMETRY.ITEM_WIDTH - DESIGN_TOKENS.spacing.xl,
    paddingRight: DESIGN_TOKENS.spacing.xl,
    paddingVertical: hp(8),
    alignItems: 'center',
  },
});
