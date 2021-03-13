import React from 'react';

import styles from './sidebar-layout.scss';

interface Props {
  children: React.ReactNode;
}

function SidebarLayout({ children }: Props) {
  return <div className={styles.layout}>{children}</div>;
}

export default SidebarLayout;
