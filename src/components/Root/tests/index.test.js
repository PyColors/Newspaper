import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../Root';
import Science from '../../../containers/science';
import Sport from '../../containers/sport';

describe('Index path', () => {
  let element;

  beforeEach(() => {
    element = <Root />;
  });

  it('renders as expected', () => {
    const component = shallow(element);
    expect(component).toMatchSnapshot();
  });

  it('routes /Science', () => {
    const component = shallow(element);
    expect(
      component
        .find('Route[path="/Science"]')
        .first()
        .prop('component')
    ).toBe(Science);
  });

  it('routes /Science', () => {
    const component = shallow(element);
    expect(
      component
        .find('Route[path="/Sport"]')
        .first()
        .prop('component')
    ).toBe(Sport);
  });

  it('routes /Science', () => {
    const component = shallow(element);
    expect(
      component
        .find('Route[path="/Business"]')
        .first()
        .prop('component')
    ).toBe(Business);
  });
});
