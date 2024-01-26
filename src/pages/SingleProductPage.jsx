import { useParams } from "react-router-dom";

export default function SingleProductPage() {

  const { prodId } = useParams()
  return (
    <div className='container'>
      <h1 className='text-3xl mb-5'>SingleProductPage</h1>
    </div>
  );
}
