import React from 'react';

import styles from './button.scss';

const Button = ({ element: Element = 'button', ...props }) => <Element className={styles.button} {...props} />;

export default Button;
