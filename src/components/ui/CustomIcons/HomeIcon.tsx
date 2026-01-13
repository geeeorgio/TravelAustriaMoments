import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const HomeIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 30 30" {...props}>
      <Path
        fill={props.color || COLORS.white}
        d="m29.614 15.475-13.5-15c-.569-.633-1.66-.633-2.23 0l-13.5 15A1.5 1.5 0 0 0 1.5 17.978h3v10.5a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5v-6h6v6a1.5 1.5 0 0 0 1.5 1.5H24a1.5 1.5 0 0 0 1.5-1.5v-10.5h3a1.498 1.498 0 0 0 1.115-2.503"
      ></Path>
    </Svg>
  );
};

export default HomeIcon;
