import React from 'react';

import styles from './title.scss';

const Title = ({ element: Element = 'h2', ...props }) => <Element className={styles.title} {...props} />;

export default Title;
