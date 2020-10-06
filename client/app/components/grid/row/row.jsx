import React from 'react'
import styles from './row.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const Row = (props) => {
  const { direction, children } = props

  return (
    <div
      className={cx('grid', {
        [`grid--${direction}`]: direction,
      })}>
      {children}
    </div>
  )
}

Row.defaultProps = {
  direction: 'row',
}

export default Row
