import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Form from '../index';

describe('<Form />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <Form
          id={'id'}
          onSubmit={jest.fn()}
          action={'action'}
          method={'method'}
        />
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render a prop', () => {
    const id = 'testH1Id';
    const renderedComponent = shallow(<Form id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render a prop action', () => {
    const action = 'action';
    const renderedComponent = shallow(<Form action={action} />);
    expect(renderedComponent.prop('action')).toEqual(action);
  });

  it('should render a prop onSubmit', () => {
    const onSubmit = jest.fn();
    const renderedComponent = shallow(<Form onSubmit={onSubmit} />);
    expect(renderedComponent.prop('onSubmit')).toEqual(onSubmit);
  });

  it('should render a prop method', () => {
    const method = 'POST';
    const renderedComponent = shallow(<Form method={method} />);
    expect(renderedComponent.prop('method')).toEqual(method);
  });
});
