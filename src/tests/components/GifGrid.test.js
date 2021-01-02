import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Prueba de GifGrid', () => {

  const category = 'One punch';

  test('Debe renderizar el componente correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid category={ category } />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar el componente con toda la información cargada por useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      title: 'TitlePrueba',
      url: 'UrlPrueba'
    },
    {
      id: 'DEF',
      title: 'TitlePrueba',
      url: 'UrlPrueba'
    }]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid category={ category } />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });


});
