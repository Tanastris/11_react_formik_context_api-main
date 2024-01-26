import { useParams } from "react-router-dom";
import useApiData from "../hooks/useApiData";

export default function SingleProductPage() {

  const { prodId } = useParams()
  const url = `https://dummyjson.com/products/${prodId}`

  const [currentObj, setCurrentObj] = useApiData(url)
  console.log('currentObj ===', currentObj);

  // parsisiusti duomenis ir iskonsolinti sio produkto informacija su useapidata
  return (
    <div className='container'>
      <h1 className='text-3xl mb-5'>SingleProductPage</h1>
    </div>
  );
}
