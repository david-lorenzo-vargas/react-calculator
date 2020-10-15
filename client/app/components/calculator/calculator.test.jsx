import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './calculator';

const getUnit = (props) => (
  shallow(<Calculator {...props} />)
);

describe('Calculator', () => {
  describe('render', () => {
    it('should render corrently', () => {
      const wrapper = getUnit();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('state', () => {
    describe('when the component first mounts', () => {
      it('should match the default state', () => {
        const expected = {
          buttonValue: '',
          buttonType: '',
          savedValue: 0,
          savedButtonType: '',
        };
        const wrapper = getUnit();
        const received = wrapper.state();

        expect(received).toMatchObject(expected);
      });
    });
  });

  describe('getTotals', () => {
    it('should return a number', () => {
      const wrapper = getUnit();

      wrapper.setState({
        buttonValue: '10',
      });

      const total = wrapper.instance().getTotals();
      const expected = 10;

      expect(total).toBe(expected);
      expect(typeof total).toBe('number');
    });

    describe('when state.buttonType is a valid operation', () => {
      it('should return the correct value', () => {
        const states = [
          {
            expected: 0,
            state: { buttonValue: 10, savedValue: 10, buttonType: 'substract' },
          },
          {
            expected: 100,
            state: { buttonValue: 10, savedValue: 10, buttonType: 'multiply' },
          },
          {
            expected: 1,
            state: { buttonValue: 10, savedValue: 10, buttonType: 'division' },
          },
          {
            expected: 20,
            state: { buttonValue: 10, savedValue: 10, buttonType: 'add' },
          },
        ];

        states.forEach((stateItem) => {
          const { expected, state } = stateItem;
          const wrapper = shallow(<Calculator />);
          wrapper.setState(state);

          const received = wrapper.instance().getTotals();

          expect(received).toEqual(expected);
        });
      });
    });

    describe('when buttonType is not a valid operation', () => {
      it('should not run any operation and return the newButtonValue', () => {
        const wrapper = shallow(<Calculator />);

        wrapper.setState({
          buttonValue: '10',
          buttonType: undefined,
          savedValue: 20,
        });

        const received = wrapper.instance().getTotals();
        const expected = 10;

        expect(received).toBe(expected);
      });
    });
  });

  describe('handleoperation', () => {
    describe('when the button type === operation', () => {
      it('should return an object', () => {
        const wrapper = getUnit();

        wrapper.setState({
          buttonValue: 10,
          buttonType: 'add',
          savedValue: 20,
        });

        const received = wrapper.instance().handleOperation('add');
        const expected = {
          buttonValue: '',
          buttonType: 'add',
          savedValue: 30,
        };
        expect(received).toMatchObject(expected);
      });
    });
  });

  describe('handleEqual', () => {
    describe('when I ran handleEqual', () => {
      it('should return the corrent object', () => {
        const wrapper = getUnit();

        wrapper.setState({
          buttonValue: 20,
          buttonType: 'add',
          savedValue: 20,
        });

        const received = wrapper.instance().handleEqual();
        const expected = {
          buttonValue: 40,
          buttonType: '',
          savedValue: 40,
          savedButtonType: '',
        };

        expect(received).toMatchObject(expected);
      });
    });
  });

  describe('handleButtonClick', () => {
    describe('when buttonType === "num"', () => {
      it('should set the state correctly', () => {
        const wrapper = getUnit();
        const buttonObject = {
          value: 10,
          type: 'num',
        };

        wrapper.instance().handleButtonClick(buttonObject);

        const received = wrapper.state();
        const expected = {
          buttonType: '',
          buttonValue: '10',
          savedButtonType: '',
          savedValue: 0,
        };

        expect(received).toEqual(expected);
      });
    });
  });
});
