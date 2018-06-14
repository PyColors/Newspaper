import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

describe('<Button />', () => {
  it('should render an <Button> tag', () => {
    const renderedComponent = shallow(<Button />);
    expect(renderedComponent.type()).toEqual('button');
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(<Button>{children}</Button>);
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should render a prop', () => {
    const id = 'testH1Id';
    const renderedComponent = shallow(<Button id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
