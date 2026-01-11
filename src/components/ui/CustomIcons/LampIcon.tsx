import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from 'src/constants';

const LampIcon = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 36 36" {...props}>
      <Path
        fill={props.color || COLORS.white}
        d="M10.5 30h6c0 1.65-1.35 3-3 3s-3-1.35-3-3m-3-3c0 .825.675 1.5 1.5 1.5h9c.825 0 1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5H9c-.825 0-1.5.675-1.5 1.5m17.25-12.75c0 5.73-3.99 8.79-5.655 9.75H7.905c-1.665-.96-5.655-4.02-5.655-9.75C2.25 8.04 7.29 3 13.5 3s11.25 5.04 11.25 11.25m7.305-3.195L30 12l2.055.945L33 15l.945-2.055L36 12l-2.055-.945L33 9zM28.5 9l1.41-3.09L33 4.5l-3.09-1.41L28.5 0l-1.41 3.09L24 4.5l3.09 1.41z"
      ></Path>
    </Svg>
  );
};

export default LampIcon;
