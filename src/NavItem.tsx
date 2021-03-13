import React from 'react';

import styles from './nav-item.scss';

const NavItem = ({ element: Element = 'button', ...props }) => <Element className={styles['nav-item']} {...props} />;

export default NavItem;
