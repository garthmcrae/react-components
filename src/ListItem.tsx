import React from 'react';

import styles from './list-item.scss';

const ListItem = props => <li className={styles.item} {...props} />;

export default ListItem;
