import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);

  return (
    <div className='card-grid'>
      <h3>{ category }</h3>
      { loading && <p className='animate__animated animate__flash animate__infinite'>Cargando...</p> }
      {
        images.map((img) => {
          return (
            <GifGridItem
              key={ img.id }
              { ...img }
            />
          )
        })
      }
    </div>
  )
}

export default GifGrid;