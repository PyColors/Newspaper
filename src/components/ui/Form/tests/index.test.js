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
          onSubmit={'onSubmit'}
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
});
