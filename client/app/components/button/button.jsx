import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = (props) => {
  const {
    value, theme, color, size, type, text, onClick,
  } = props;

  const handleButtonClick = () => {
    onClick({ value, type });
  };

  return (
    <div>
      <button
        type="button"
        className={cx('button', {
          [`button--theme-${theme}`]: theme,
          [`button--${size}`]: size,
          [`button--${color}`]: color,
        })}
        onClick={() => {
          handleButtonClick();
        }}
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.number,
  theme: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
