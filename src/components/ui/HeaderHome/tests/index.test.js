import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import HeaderHome from '../index';

describe('<HeaderHome />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <header class="className">
          <h1 class="className">
            <span>Description</span>
          </h1>
          >
        </header>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render an <HeaderHome> tag', () => {
    const renderedComponent = shallow(<HeaderHome />);
    expect(renderedComponent.type()).toEqual('header');
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(<HeaderHome>{children}</HeaderHome>);
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should render a prop', () => {
    const id = 'testH1Id';
    const renderedComponent = shallow(<HeaderHome id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
