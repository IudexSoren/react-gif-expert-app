import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas de AddCategory', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
  });

  test('Debe renderizar correctamente el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe cambiar el valor del inputText', () => {
    const input = wrapper.find('input');
    const value = 'Purrumaw';
    input.simulate('change', { target: { value } });
    const initValue = '';

    expect(value).not.toBe(initValue);
  });

  test('No debe hacer nada el formulario', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault(){} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Debe llamar al setCategories y limpiar el inputText', () => {
    let input = wrapper.find('input');
    const value = 'Purrumaw';
    input.simulate('change', { target: { value } });

    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault(){} });
    input = wrapper.find('input');

    expect(setCategories).toHaveBeenCalled();
    expect(input.prop('value')).toBe('');
  })


})
