import PropTypes from 'prop-types';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Telescope({ color, height, width, style }) {
  return (
    <Svg height={height} width={width} viewBox="0 0 128 128" style={style}>
      <Path
        fill={color}
        d="M52.193 63.348a1.75 1.75 0 00-2.351-.772l-8.258 4.173a1.75 1.75 0 101.58 3.124l8.257-4.173a1.751 1.751 0 00.772-2.352z"
      />
      <Path
        fill={color}
        d="M61.969 48.725a1.75 1.75 0 00-2.352-.772l-8.032 4.059a1.752 1.752 0 00-.773 2.352l.4.792-37.2 18.8a1.751 1.751 0 00-.772 2.352l1.175 2.325-8.7 4.393a1.748 1.748 0 00-.773 2.351L9 93.41a1.746 1.746 0 002.35.772l8.7-4.393 1.168 2.311a1.748 1.748 0 002.351.772l9.316-4.706a7.78 7.78 0 001.882 1.608l-10.751 31.155a1.749 1.749 0 001.083 2.225 1.725 1.725 0 00.571.1 1.75 1.75 0 001.654-1.179l10.764-31.19c.233.021.469.036.708.036s.48-.015.716-.037l10.764 31.191a1.75 1.75 0 001.654 1.179 1.725 1.725 0 00.571-.1 1.748 1.748 0 001.083-2.225L42.832 89.77a7.689 7.689 0 003.5-8.4l14.444-7.3.4.8a1.75 1.75 0 002.351.773l8.033-4.06a1.751 1.751 0 00.772-2.352zM11.333 90.27l-2.481-4.907 7.139-3.605 2.48 4.907zM38.8 87.417a4.25 4.25 0 114.25-4.25 4.255 4.255 0 01-4.25 4.25zm5.975-9.182a7.736 7.736 0 00-13.483 6.817l-7.736 3.907-6.4-12.667L52.792 58.28l6.4 12.665zm18.735-6.507l-8.784-17.381 4.908-2.481 8.785 17.38zM72.453 14.4l2.341-2.283a1.75 1.75 0 00-.97-2.985l-3.236-.47-1.446-2.936a1.75 1.75 0 00-3.139 0l-1.447 2.931-3.235.47a1.75 1.75 0 00-.97 2.985l2.341 2.288-.552 3.222a1.748 1.748 0 002.539 1.844l2.893-1.521 2.894 1.521a1.749 1.749 0 002.539-1.844zm-3.1-1.864a1.746 1.746 0 00-.5 1.549l.108.634-.569-.3a1.743 1.743 0 00-1.629 0l-.57.3.109-.634a1.749 1.749 0 00-.5-1.549l-.461-.45.637-.092a1.751 1.751 0 001.318-.958l.284-.576.285.576a1.749 1.749 0 001.318.958l.637.092zM88.5 32.294l-3.235-.47-1.447-2.932a1.75 1.75 0 00-3.138 0l-1.447 2.932-3.233.47a1.75 1.75 0 00-.971 2.985l2.342 2.282-.553 3.222a1.75 1.75 0 002.539 1.845l2.894-1.521 2.894 1.521a1.75 1.75 0 002.539-1.845l-.553-3.222 2.342-2.282a1.75 1.75 0 00-.971-2.985zm-4.473 3.4a1.752 1.752 0 00-.5 1.549l.109.634-.57-.3a1.749 1.749 0 00-1.628 0l-.57.3.109-.634a1.752 1.752 0 00-.5-1.549l-.461-.449.636-.093a1.75 1.75 0 001.318-.957l.285-.577.285.577a1.75 1.75 0 001.318.957l.636.093zM38.432 33.021l-.552 3.223a1.749 1.749 0 002.539 1.844l2.893-1.521 2.894 1.521a1.749 1.749 0 002.539-1.844l-.552-3.223 2.341-2.282a1.75 1.75 0 00-.97-2.985l-3.235-.47-1.447-2.931a1.75 1.75 0 00-3.139 0L40.3 27.284l-3.235.47a1.75 1.75 0 00-.97 2.985zm3.278-2.405a1.751 1.751 0 001.318-.958l.284-.576.285.576a1.751 1.751 0 001.318.958l.637.092-.461.45a1.749 1.749 0 00-.5 1.549l.108.634-.569-.3a1.743 1.743 0 00-1.629 0l-.569.3.108-.634a1.749 1.749 0 00-.5-1.549l-.461-.45zM106.912 70.669l-3.236-.47-1.447-2.931a1.749 1.749 0 00-3.138 0L97.644 70.2l-3.236.47a1.751 1.751 0 00-.97 2.985l2.342 2.283-.553 3.222A1.75 1.75 0 0097.766 81l2.894-1.522L103.554 81a1.75 1.75 0 002.539-1.845l-.552-3.222 2.341-2.283a1.75 1.75 0 00-.97-2.985zm-4.474 3.4a1.748 1.748 0 00-.5 1.549l.108.634-.569-.3a1.743 1.743 0 00-1.629 0l-.57.3.109-.634a1.752 1.752 0 00-.5-1.549l-.461-.45.637-.092a1.751 1.751 0 001.317-.958l.28-.569.285.577a1.749 1.749 0 001.318.958l.636.092zM105.06 4.75a18.286 18.286 0 00-14.647 7.4 1.749 1.749 0 001.759 2.75 14.7 14.7 0 0114.947 23.072 1.75 1.75 0 001.411 2.784 1.768 1.768 0 00.367-.039A18.19 18.19 0 00105.06 4.75zm7.234 30.972A18.206 18.206 0 0096.333 11.11a14.7 14.7 0 0123.417 11.83 14.778 14.778 0 01-7.456 12.782z"
      />
    </Svg>
  );
}

Telescope.defaultProps = {
  height: 120,
  width: 120,
  color: 'white',
};

Telescope.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default Telescope;
