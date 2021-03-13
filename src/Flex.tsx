import React from 'react';

import styles from './flex.scss';

function Flex({ wrap, ...props }) {
  const classList = [styles.flex];
  wrap && classList.push(styles.wrap);
  return <div className={classList.join(' ')} {...props} />;
}

export default Flex;
