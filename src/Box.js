import React from 'react';
import styles from './box.scss';

const Box = ({ children, fluid, solid, adaptive, width, ...props }) => {
  const classList = [styles.box];
  adaptive && classList.push(styles.adaptive);
  fluid && classList.push(styles.fluid);
  solid && classList.push(styles.solid);
  width && classList.push(styles[`width-${width}`]);
  return <div className={classList.join(' ')}>{children}</div>;
};

export default Box;
