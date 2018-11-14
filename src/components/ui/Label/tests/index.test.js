import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Label from '../index';

const title = 'Title Label';
const htmlFor = 'htmlFor';

const renderComponent = (props = {}) =>
  shallow(<img title={title} htmlFor={htmlFor} {...props} />);

describe('<Label />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer
      .create(<Label title="What do you think" htmlFor="PyColors" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have a title attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('title')).toEqual(title);
  });

  it('should have an htmlFor attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('htmlFor')).toEqual(htmlFor);
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
