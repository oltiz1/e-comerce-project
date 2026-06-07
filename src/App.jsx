import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products/')
    .then(response => response.json())
    .then(data => setProducts(data.products))
    .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-content">
    <h1 className="text-3xl font-bold underline">Product List</h1>  
    <div className="container mx-auto py-4">
    {products.map(product => (
      <div key={product.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price.description(2)}</p>
        <p className="text-gray-800 font-bold">${product.price}</p>
      </div>
    ))}
    </div>
  );
}
export default App;