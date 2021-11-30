import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const SearchIcon: FC <{ width?: number, height?: number, color?: string }> = ({color, width, height}) => {
  return (
  <Svg width={width || 18} height={height || 18} viewBox="0 0 23 23" fill="none" >
      <Path
        d="M21.75 21.75l-4.86-4.869 4.86 4.869zm-2.167-11.375a9.208 9.208 0 11-18.417 0 9.208 9.208 0 0118.417 0v0z"
        stroke={color || '#8F8F8F'}
        strokeWidth={2}
        strokeLinecap="round"
      />
  </Svg>
)
}
