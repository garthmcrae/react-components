import React from 'react';

import styles from './box.scss';

interface Props {
  children: React.ReactNode;
  fluid: boolean;
  solid: boolean;
  adaptive: boolean;
  width: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
}

function Box({ children, fluid, solid, adaptive, width }: Props) {
  const classList = [styles.box];
  adaptive && classList.push(styles.adaptive);
  fluid && classList.push(styles.fluid);
  solid && classList.push(styles.solid);
  width && classList.push(styles[`width-${width}`]);
  return <div className={classList.join(' ')}>{children}</div>;
}

export default Box;
