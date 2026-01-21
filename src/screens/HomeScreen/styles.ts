import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: wp(60),
  },
  image: {
    width: '100%',
    height: hp(250),
    alignSelf: 'center',
  },
});
