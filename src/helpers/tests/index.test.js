import Hr from '../styles';

describe('<Hr />', () => {
  it('should render a prop', () => {
    const id = 'HrId';
    const renderedComponent = shallow(<Hr id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
