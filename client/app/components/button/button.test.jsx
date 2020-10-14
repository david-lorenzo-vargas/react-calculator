import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './button';

describe('Button', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<Button
        type="num"
        value={0}
        text="0"
        theme="grey"
        size="big"
      />);

      expect(wrapper).toMatchSnapshot();
    });

    describe('when I am not passing the size prop', () => {
      it ('should render correctly', () => {
        const wrapper = shallow(<Button
          type="num"
          value={0}
          text="0"
          theme="grey"
        />);

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('when I am passing color prop', () => {
      it('should render correctly', () => {
        const wrapper = mount(<Button
          type="num"
          value={0}
          text="0"
          theme="grey"
          color="pink"
        />);

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('when I click the button', () => {
      it('should call onClick function passing value and type', () => {
        const onClick = jest.fn();
        const wrapper = mount(<Button
          type="num"
          value={0}
          text="0"
          theme="grey"
          color="pink"
          onClick={onClick}
        />);

        wrapper.simulate('click');
        const args = {
          type: 'num',
          value: 0,
        };

        expect(onClick).toHaveBeenCalledWith(args);
      });
    });
  });
});
