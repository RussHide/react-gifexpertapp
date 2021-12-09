import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    /*  const [count, setCount] = useState(0); */
    const {data:images, loading} = useFetchGif(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className="cardGrid">
                {images.map((img) => <GifGridItem key={img.id} {...img} />
                )}
                {/* <h3>{count}</h3>
            <button onClick={() => {setCount(count+1)}}>Add</button> */}
            </div>
        </>
    )
}
