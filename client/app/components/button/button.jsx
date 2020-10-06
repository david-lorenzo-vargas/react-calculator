import React from 'react'
import classnames from 'classnames/bind'

import styles from './button.scss'

const cx = classnames.bind(styles)

const Button = (props) => {
  const handleButtonClick = ({ value, type }) => {
    onClick({ value, type })
  }

  const { value, theme, color, size, type, text, onClick } = props

  return (
    <div>
      <button
        className={cx('button', {
          [`button--theme-${theme}`]: theme,
          [`button--${size}`]: size,
          [`button--${color}`]: color,
        })}
        onClick={() => {
          handleButtonClick({ value, type })
        }}>
        {text}
      </button>
    </div>
  )
}

export default Button
