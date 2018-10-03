import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import H2 from '../../H2';

describe('<H2 />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <H2 class="className">
          {' '}
          <span>Description</span>>
        </H2>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render an <H1> tag', () => {
    const renderedComponent = shallow(<H2 />);
    expect(renderedComponent.type()).toEqual('h2');
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(<H2>{children}</H2>);
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should render a prop', () => {
    const id = 'testH2Id';
    const renderedComponent = shallow(<H2 id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
