import React from 'react';

import styles from './input.scss';

const Input = ({ inputRef, ...props }) => <input className={styles.input} ref={inputRef} {...props} />;

export default Input;
