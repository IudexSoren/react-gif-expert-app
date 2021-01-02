import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas de GifExpertApp', () => {

  test('Debe renderizar correctamente el componente', () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar una lista de categorías', () => {
    const categories = ['One Punch', 'DBZ'];
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  })


})
