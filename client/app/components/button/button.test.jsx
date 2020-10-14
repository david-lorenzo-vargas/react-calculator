import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('Button', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const props = [
        {
          type: 'num',
          value: 0,
          text: '0',
          theme: 'grey',
          size: 'big',
        },
        {
          type: 'num',
          value: 0,
          text: '0',
          theme: 'grey',
        },
        {
          type: 'num',
          value: 0,
          text: '0',
          theme: 'grey',
          color: 'pink',
        },
      ];

      props.forEach((propItem) => {
        const wrapper = shallow(<Button {...propItem} />);
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('when I click the button', () => {
      it('should call onClick function passing value and type', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Button
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
