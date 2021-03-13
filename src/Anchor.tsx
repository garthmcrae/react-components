import React from 'react';

import styles from './anchor.scss';

interface Props {
  element: React.ReactNode;
}

function Anchor({ element: Element = 'a', ...props }: Props) {
  return <Element className={styles.anchor} {...props} />;
}

export default Anchor;
