import React from 'react';
import styles from './header.scss';

interface Props {
  children: React.ReactNode;
  label: string;
}

function Header({ children, label }: Props) {
  return (
    <header className={styles.header} role="banner" aria-label={label}>
      {children}
    </header>
  );
}

export default Header;
