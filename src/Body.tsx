import React from 'react';

import styles from './body.scss';

interface Props {
  children: React.ReactNode;
}

function Body({ children }: Props) {
  return <div className={styles.body}>{children}</div>;
}

export default Body;
