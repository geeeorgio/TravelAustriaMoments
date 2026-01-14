import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.transparentBckgd,
  },
  horizontalContentWrapper: {
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: sp(15),
    marginBottom: hp(20),
  },
  header: {
    fontSize: sp(15),
    fontFamily: FONTS.Ultra,
  },
  listContainer: {
    width: '100%',
  },
  listContentContainer: {
    paddingBottom: hp(160),
    gap: hp(20),
  },
  completionContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  completionImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  completionContentOverlay: {
    width: '100%',
    padding: wp(16),
    alignItems: 'center',
    backgroundColor: COLORS.lightDarkerBorder,
    borderRadius: wp(32),
    overflow: 'hidden',
    borderWidth: wp(2),
    borderColor: COLORS.lightBorder,
    gap: hp(20),
    zIndex: 1,
  },
  completionTextContainer: {
    width: '100%',
    alignItems: 'center',
    gap: hp(8),
  },
  completionTitle: {
    fontSize: sp(16),
    textAlign: 'center',
  },
  completionDescription: {
    fontSize: sp(16),
    textAlign: 'center',
  },
  randomLocationButton: {
    width: '100%',
    marginTop: hp(24),
    paddingVertical: wp(16),
  },
  randomLocationButtonText: {
    fontSize: sp(14),
    fontFamily: FONTS.Ultra,
  },
});
