import ProductsList from "../components/products/ProductsList";

export default function ProductPage() {
  return (
    <div className='container'>
      <h1 className='text-3xl mb-5'>ProductPage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem nam fugit dolor
        dolorem iure voluptatum optio quod, laboriosam, molestiae illum, beatae distinctio corporis
        cumque placeat laudantium accusantium aspernatur consequatur exercitationem labore. Adipisci
      </p>
      <ProductsList />
    </div>
  );
}
