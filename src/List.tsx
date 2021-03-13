import React from 'react';

import styles from './list.scss';

const List = ({ direction = 'column', ...props }) => (
  <ul className={`${styles.list} ${styles[direction]}`} {...props} />
);

export default List;
