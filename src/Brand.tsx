import React from 'react';

import styles from './brand.scss';

const Anchor = ({ element: Element = 'a', ...props }) => (
  <span className={styles.container}>
    <Element className={styles.link} {...props} />
  </span>
);

export default Anchor;
