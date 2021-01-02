import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas de useFetchGifs', () => {

  test('Debe retornar el estado inicial', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('Debe retornar el arreglo de gifs y el loading en false', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  });

})
