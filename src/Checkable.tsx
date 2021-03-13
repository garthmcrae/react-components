import React from 'react';

import styles from './checkable.scss';

interface Props {
  children: React.ReactNode;
  id: string;
  inputRef: React.ReactNode;
  name: string;
}

const Checkable = ({ children, id, inputRef, name, ...props }: Props) => {
  return (
    <div>
      <input className={styles.input} id={id} name={name} ref={inputRef} {...props} />
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export default Checkable;
