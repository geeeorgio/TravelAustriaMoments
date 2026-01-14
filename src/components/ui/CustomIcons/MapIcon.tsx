import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const MapIcon = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 18 21" {...props}>
      <Path
        stroke={props.color || COLORS.white}
        fill={props.fill || 'none'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        d="M14.383 3.059c3.15 3.098 3.15 8.056.042 11.113L8.754 19.75 3.08 14.172a7.74 7.74 0 0 1 0-11.072l.042-.041a8.017 8.017 0 0 1 11.26 0m0 0q-.063-.063 0 0M10.75 7.75a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      ></Path>
    </Svg>
  );
};

export default MapIcon;
