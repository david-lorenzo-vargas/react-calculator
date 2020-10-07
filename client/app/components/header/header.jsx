import React from 'react';

import styles from './header.scss';

const Header = (props) => (
  <div className={styles.calculator__header}>
    <span className={styles.calculator__header__total}>{props.total}</span>
  </div>
);

export default Header;
