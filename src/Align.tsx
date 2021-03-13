import React from 'react';

import styles from './align.scss';

interface Props {
  children: React.ReactNode;
  element: React.ReactNode;
}

function Align({ children, element: Element = 'span' }: Props) {
  return <Element className={styles.align}>{children}</Element>;
}

export default Align;
