import React from 'react';

import styles from './sidebar-main.scss';

interface Props {
  children: React.ReactNode;
}

function SidebarMain({ children }: Props) {
  return <main className={styles.main}>{children}</main>;
}

export default SidebarMain;
