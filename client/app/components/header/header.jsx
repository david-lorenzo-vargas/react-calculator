import React from 'react';
import PropTypes from 'prop-types';

import styles from './header.scss';

const Header = (props) => {
  const { total } = props;

  return (
    <div className={styles['calculator-header']}>
      <span className={styles['calculator-header__total']}>{total}</span>
    </div>
  );
};

Header.propTypes = {
  total: PropTypes.number,
};

export default Header;
