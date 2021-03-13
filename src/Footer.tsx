import React from 'react';
import styles from './footer.scss';

interface Props {
  children: React.ReactNode;
}

const Footer = ({ children }: Props) => {
  return (
    <footer className={styles.footer}>
      <span>{children}</span>
    </footer>
  );
};

export default Footer;
