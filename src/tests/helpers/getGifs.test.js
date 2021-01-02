import { getGifs } from '../../helpers/getGifs';

describe('Pruebas de getGifs', () => {

  test('Debe retornar al menos 10 elementos', async() => {
    const gifs = await getGifs('One punch');

    expect(gifs.length).toBe(10);
  });

  test('Debe retornar un arreglo vacío cuando no se envíe la categoría', async() => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });

})
