import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const MainIcon: FC <{ width?: number, height?: number, color?: string }>  = ({ color, width, height }) => {
    return (
    <Svg width={width || 25} height={height || 25} viewBox="0 0 25 23" fill={color || '#8F8F8F'} >
        <Path
          d="M23.855 11.312L12.787.252a.858.858 0 00-1.214 0L.505 11.312a1.721 1.721 0 001.215 2.937h1.166v7.891c0 .476.384.86.86.86h6.714v-6.019h3.01V23h7.145c.475 0 .86-.384.86-.86v-7.892h1.166a1.721 1.721 0 001.215-2.937z"
          fill={color || '#8F8F8F'}
        />
    </Svg>
  )
}
