import React from 'react';
import { shallow } from 'enzyme';
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

      it('should add size "big" only when it is passed by props', () => {
        const wrapper = shallow(<Button
          type="num"
          value={0}
          text="0"
          theme="grey"
          size="big"
        />);

        const received = wrapper.instance().props.size;
        const expected = 'big';

        expect(received).toEqual(expected);
      });
    });
  });
});
