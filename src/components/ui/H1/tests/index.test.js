import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import H1 from '../index';

describe('<H1 />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <H1 class="className">
          {' '}
          <span>Description</span>>
        </H1>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render an <H1> tag', () => {
    const renderedComponent = shallow(<H1 />);
    expect(renderedComponent.type()).toEqual('h1');
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(<H1>{children}</H1>);
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should render a prop', () => {
    const id = 'testH1Id';
    const renderedComponent = shallow(<H1 id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
