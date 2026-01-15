import { StyleSheet } from 'react-native';

import { wp } from 'src/utils';

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
    alignSelf: 'center',
  },
});
