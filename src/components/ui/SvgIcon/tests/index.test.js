import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SvgIcon from '../index';
import { COLOR_ICONS, ICONS } from '../../../../utils/constants';

const icon = ICONS.FACEBOOK;
const color = COLOR_ICONS.BLACK;
const viewBox = '0 0 1024 1024';

const renderComponent = (props = {}) =>
  shallow(<SvgIcon color={color} icon={icon} {...props} />);

describe('<SvgIcon />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer
      .create(<SvgIcon color={COLOR_ICONS.BLACK} icon={ICONS.FACEBOOK} />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have a viewBox attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('viewBox')).toEqual(viewBox);
  });

  it('should not render texts', () => {
    const children = 'Text';
    const renderedComponent = shallow(<SvgIcon>{children}</SvgIcon>);
    expect(renderedComponent.contains(children)).toBe(false);
  });

  it('should not have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('className')).toBeUndefined();
  });
});
