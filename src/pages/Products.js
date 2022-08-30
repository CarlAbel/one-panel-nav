import { useEffect, useState, useContext } from "react";
import TokenContext from "../context/TokenContext";

export default function Products() {
  const [products, setProducts] = useState([]);

  const { token } = useContext(TokenContext);

  useEffect(function () {
    fetch("http://localhost:3001/products", {
      headers: {
        authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())

      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1>Products</h1>

      <article>
        {products.map((product) => (
          <p className="text-white">{product.eanNumber}</p>
        ))}
        <p>DATE ADDED</p>

        {products.map((product) => (
          <li className="text-white">{product.productName} Product Name: </li>
        ))}

        <i>Line</i>
        {products.map((product) => (
          <h1 className="text-white">{product.productName} Product Name: </h1>
        ))}

        {products.map((product) => (
          <p className="text-white">{product.brand}</p>
        ))}
      </article>
    </div>
  );
}
