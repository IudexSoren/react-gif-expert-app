import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('Pruebas de GifGridItem', () => {

  const title = 'Title de prueba';
  const url = 'Url de prueba';
  const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

  test('Debe renderizar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener un párrafo con el título', () => {
    const titulo = wrapper.find('p').text();

    expect(titulo).toBe(title);
  });

  test('Debe tener una imagen con los atributos src y alt', () => {
    const img = wrapper.find('img');
    const { src, alt } = img.props();

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Debe tener la clase animate__fadeInUp', () => {
    const card = wrapper.find('.card');

    expect(card.hasClass('animate__fadeInUp')).toBe(true);
  })


})
