import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Img from '../index';

const src = 'src.png';
const alt = 'description';

const renderComponent = (props = {}) =>
  shallow(<img src={src} alt={alt} {...props} />);

describe('<Img />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer
      .create(<Img src="http://pycolor.com/test.jpg" alt="PyColors" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have an src attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('src')).toEqual(src);
  });

  it('should have an alt attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('alt')).toEqual(alt);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(<Img>{children}</Img>);
    expect(renderedComponent.contains(children)).toBe(false);
  });

  it('should not have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeUndefined();
  });

  it('should assume a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.hasClass(className)).toBe(true);
  });
});
