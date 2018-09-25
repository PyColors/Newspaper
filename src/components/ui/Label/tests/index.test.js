import React from 'react';
import { shallow } from 'enzyme';

import Label from '../index';

const title = 'title description';
const htmlFor = 'htmlFor';

const renderComponent = (props = {}) =>
  shallow(<Label title={'title'} htmlFor={'htmlFor'} {...props} />);

describe('<Label />', () => {
  it('should have an title attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('title')).toEqual(title);
  });

  it('should have an htmlFor attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('htmlFor')).toEqual(htmlFor);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(<Label>{children}</Label>);
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
