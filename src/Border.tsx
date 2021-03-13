import React from 'react';

import styles from './border.scss';

interface Props {
  children: React.ReactNode;
}

function Border({ children }: Props) {
  return <div className={styles.border}>{children}</div>;
}

export default Border;
