import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './calculator';

describe('Calculator', () => {
  describe('render', () => {
    it('should render corrently', () => {
      const wrapper = shallow(<Calculator />);

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
        const wrapper = shallow(<Calculator />);
        const received = wrapper.state();

        expect(received).toMatchObject(expected);
      });
    });
  });

  describe('getTotals', () => {
    describe('when state.buttonType === add', () => {
      it('should sum state.buttonValue and state.savedValue', () => {
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
  });
});
