import { StyleSheet } from 'react-native';

import { hp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
  },
  contentContainer: {
    paddingBottom: hp(100),
    gap: hp(20),
  },
});
