import React from 'react';

const Burger = ({ size = 20, width = 2, ...props }) => (
  <svg style={{ display: 'block' }} viewBox={`0 0 ${size} ${size}`} height={size} width={size} {...props}>
    <path d={`M0,0 L${size},0 L${size},${width} L0,${width}z`} fill="currentColor" />
    <path
      d={`M0,${size / 2 + width / 2} L${size},${size / 2 + width / 2} L${size},${size / 2 - width / 2} L0,${size / 2 -
        width / 2}z`}
      fill="currentColor"
    />
    <path d={`M0,${size} L${size},${size} L${size},${size - width} L0,${size - width}z`} fill="currentColor" />
  </svg>
);

export default Burger;
