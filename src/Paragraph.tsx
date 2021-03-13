import React from 'react';

import styles from './paragraph.scss';

const Paragraph = ({ element: Element = 'p', ...props }) => <Element className={styles.paragraph} {...props} />;

export default Paragraph;
