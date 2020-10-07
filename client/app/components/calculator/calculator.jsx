import React from 'react';
import { Body } from '../body';
import { Header } from '../header';

import '../reset.scss';
import styles from './calculator.scss';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonValue: '',
      buttonType: '',
      savedValue: 0,
      savedButtonType: '',
    };
  }

  getTotals() {
    const { buttonValue, buttonType, savedValue } = this.state;
    const newSavedValue = Number(savedValue);
    const newButtonValue = Number(buttonValue);

    if (buttonType === 'add') {
      return newSavedValue + newButtonValue;
    } else if (buttonType === 'substract') {
      return newSavedValue - newButtonValue;
    } else if (buttonType === 'multiply') {
      return newSavedValue * newButtonValue;
    } else if (buttonType === 'division') {
      return newSavedValue / newButtonValue;
    } else if (buttonType === 'percentage') {
      return this.calculatePercentages();
    }

    return newButtonValue;
  }

  handleOperation(value) {
    return {
      buttonValue: '',
      buttonType: value,
      savedValue: this.getTotals(),
    };
  }

  handleEqual() {
    return {
      buttonValue: this.getTotals(),
      buttonType: '',
      savedValue: this.getTotals(),
      savedButtonType: '',
    };
  }

  handlePercentage(value) {
    return {
      buttonValue: this.state.buttonValue,
      buttonType: value,
      savedValue: this.state.savedValue,
      savedButtonType: this.state.buttonType,
    };
  }

  handleReset() {
    return {
      buttonValue: '',
      buttonType: '',
      savedValue: 0,
    };
  }

  handleNumber(value) {
    const buttonValueNumber = this.state.buttonValue + value;
    return {
      buttonValue: buttonValueNumber,
    };
  }

  handleOpposite(value) {
    return {
      buttonValue: this.state.buttonValue * -1,
      buttonType: value,
      savedValue: this.state.savedValue * -1,
      savedButtonType: this.state.buttonType,
    };
  }

  handleButtonClick({ value, type }) {
    let newState;

    if (type === 'num') {
      newState = this.handleNumber(value);
    } else if (
      type === 'operation' &&
      value !== 'equal' &&
      value !== 'percentage' &&
      value !== 'reset' &&
      value !== 'oposite'
    ) {
      newState = this.handleOperation(value);
    } else if (value === 'equal') {
      newState = this.handleEqual();
    } else if (value === 'percentage') {
      newState = this.handlePercentage(value);
    } else if (value === 'reset') {
      newState = this.handleReset();
    } else if (value === 'oposite') {
      newState = this.handleOpposite(value);
    }

    this.setState(newState);
  }

  calculatePercentages() {
    const {
      buttonValue, buttonType, savedValue, savedButtonType,
    } = this.state;
    const newSavedValue = Number(savedValue);
    const newButtonValue = Number(buttonValue);
    const calcPercentage = (newSavedValue * newButtonValue) / 100;
    const valuePercentage = newButtonValue * 0.01;

    if (buttonType === 'percentage' && savedButtonType === 'add') {
      return calcPercentage + newSavedValue;
    } else if (buttonType === 'percentage' && savedButtonType === 'substract') {
      return (calcPercentage - newSavedValue) * -1
    } else if (buttonType === 'percentage' && savedButtonType === 'multiply') {
      return newSavedValue * valuePercentage
    } else if (buttonType === 'percentage' && savedButtonType === 'division') {
      return newSavedValue / valuePercentage
    }
  }

  render() {
    console.log(`button value: ${this.state.buttonValue}`);
    console.log(`operation type: ${this.state.buttonType}`);
    console.log(`saved value: ${this.state.savedValue}`);
    console.log(`saved button type: ${this.state.savedButtonType}`);
    console.log(this.getTotals());

    return (
      <div className={styles.calculator}>
        <Header total={this.state.buttonValue || this.state.savedValue} />
        <Body
          onButtonClick={({ type, value }) => this.handleButtonClick({ type, value })}
        />
      </div>
    );
  }
}

export default Calculator;
