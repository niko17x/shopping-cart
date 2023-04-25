
<!-- Fetching data from 'fakestoreapi' website and implementing data onto website by mapping products to page : -->
const URL = "https://fakestoreapi.com/products";
const [products, setProducts] = React.useState([]);

React.useEffect(() => {
  const fetchData = async () => {
    const result = await fetch(URL);
    const json = await result.json();
    setProducts(json);
  };
  fetchData();
}, []);

return (
  <div>
    {products.map((product) => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        {/* <img src={product.image} alt="" /> */}
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    ))}
  </div>
);