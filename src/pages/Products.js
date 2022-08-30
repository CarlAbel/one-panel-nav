import { useContext, useEffect, useState } from "react";
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
    <>
      <article>
        {products.map((product) => (
          <h2>{product.productName}</h2>
        ))}
        {/* <div className="">
          <h2>Ean-number: {eanNumber}</h2>
          <p>Product-added: {productAdded} </p>
          <img>{customer_Id}</img>
        </div>
        <div>
          <img>{productImage}</img>
          <li className="">
            <h3>
              Product: {brand} {productName}
            </h3>
            <p>Product category: {productCategory}</p>
            <p>Product desc: {productDesc}</p>
          </li>
          <button onClick={edit}></button>
        </div>
        <div>
          <p>Purchase price: {purchasePrice}</p>
          <p>Retail price: {retailPrice}</p>
        </div> */}
      </article>

      <div className="h-8 w-8 bg-slate-100">
        <h1 className="text-white">Products</h1>
      </div>
    </>
  );
}
