import React from 'react'
import { Button } from '../button'
import { Row } from '../grid'

import styles from './body.scss'

const arrRowOne = [
  {
    id: 0,
    theme: 'grey',
    text: 'AC',
    color: 'pink',
    type: 'operation',
    value: 'reset',
  },
  {
    id: 1,
    theme: 'grey',
    text: '+-',
    color: '',
    type: 'operation',
    value: 'oposite',
  },
  {
    id: 2,
    theme: 'grey',
    text: '%',
    color: '',
    type: 'operation',
    value: 'percentage',
  },
  {
    id: 3,
    theme: 'pink',
    text: '/',
    color: '',
    type: 'operation',
    value: 'division',
  },
]

const arrRowTwo = [
  {
    id: 0,
    theme: 'grey',
    text: '7',
    type: 'num',
    value: 7,
  },
  {
    id: 1,
    theme: 'grey',
    text: '8',
    type: 'num',
    value: 8,
  },
  {
    id: 2,
    theme: 'grey',
    text: '9',
    type: 'num',
    value: 9,
  },
  {
    id: 3,
    theme: 'pink',
    text: '*',
    type: 'operation',
    value: 'multiply',
  },
]

const arrRowThree = [
  {
    id: 0,
    theme: 'grey',
    text: '4',
    type: 'num',
    value: 4,
  },
  {
    id: 1,
    theme: 'grey',
    text: '5',
    type: 'num',
    value: 5,
  },
  {
    id: 2,
    theme: 'grey',
    text: '6',
    type: 'num',
    value: 6,
  },
  {
    id: 3,
    theme: 'pink',
    text: '-',
    type: 'operation',
    value: 'substract',
  },
]

const arrRowFour = [
  {
    id: 0,
    theme: 'grey',
    text: '1',
    type: 'num',
    value: 1,
  },
  {
    id: 1,
    theme: 'grey',
    text: '2',
    type: 'num',
    value: 2,
  },
  {
    id: 2,
    theme: 'grey',
    text: '3',
    type: 'num',
    value: 3,
  },
  {
    id: 3,
    theme: 'pink',
    text: '+',
    type: 'operation',
    value: 'add',
  },
]

const arrRowFive = [
  {
    id: 0,
    theme: 'grey',
    text: '0',
    type: 'num',
    value: 0,
  },
  {
    id: 1,
    theme: 'grey',
    text: '.',
    type: 'num',
    value: '.',
  },
  {
    id: 2,
    theme: 'pink',
    text: '=',
    type: 'operation',
    value: 'equal',
    size: 'big',
  },
]

const arrs = [arrRowOne, arrRowTwo, arrRowThree, arrRowFour, arrRowFive]

const Body = (props) => {
  const generateColumn = (item) => (
    <Row key={item.id}>
      <Button
        theme={item.theme}
        text={item.text}
        color={item.color}
        type={item.type}
        value={item.value}
        size={item.size}
        onClick={props.onButtonClick}
      />
    </Row>
  )

  return (
    <div className={styles.calculator__body}>
      {arrs.map((arrItem) => (
        <Row>{arrItem.map(generateColumn)}</Row>
      ))}
    </div>
  )
}

export default Body
