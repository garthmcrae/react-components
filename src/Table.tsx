import React from 'react';

import styles from './table.scss';

const Table = props => (
  <div className={styles.container}>
    <table className={styles.table} {...props} />
  </div>
);

export default Table;
