import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const ProfileIcon: FC<{ width?: number, height?: number, color?: string }>  = ({ color, width, height }) => {
  return (
    <Svg width={width || 18} height={height || 18} viewBox="0 0 23 23" fill={color || '#8F8F8F'} >
        <Path 
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.682 8.364a4.182 4.182 0 11-8.364 0 4.182 4.182 0 018.364 0zm-2.09 0a2.091 2.091 0 11-4.183 0 2.091 2.091 0 014.182 0z"
          fill={color || '#8F8F8F'}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5 0C5.149 0 0 5.149 0 11.5S5.149 23 11.5 23 23 17.851 23 11.5 17.851 0 11.5 0zM2.09 11.5c0 2.185.746 4.197 1.996 5.794a9.395 9.395 0 017.482-3.703 9.393 9.393 0 017.414 3.615A9.41 9.41 0 102.091 11.5zm9.41 9.41a9.37 9.37 0 01-5.93-2.104 7.31 7.31 0 015.998-3.124 7.31 7.31 0 015.947 3.053 9.37 9.37 0 01-6.015 2.174z"
          fill={color || '#8F8F8F'}
        />
    </Svg>
  )
}