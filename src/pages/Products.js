import { useEffect, useState, useContext } from "react"
import TokenContext from "../context/TokenContext"

export default function Products() {
  const [products, setProducts] = useState([])

  const { token } = useContext(TokenContext)

  useEffect(function () {
    fetch("http://localhost:3001/products", {
      headers: {
        authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())

      .then((data) => setProducts(data))
  }, [])
  return (
    <div>
      <h1>Products</h1>

      <article>
        {products.map((product) => (
          <div className="w-60 bg-primary-400">
            <div>
              <h1 className="text-white">
                Product Name: {product.brand} {product.productName}
              </h1>
              <p>{product.productCategory}</p>
              <p>{product.productDesc}</p>
              <p>{product.stock}</p>
              <div className="">
                <p>{product.price}</p>
                <p>{product.retailPrice}</p>
              </div>
            </div>
          </div>
        ))}

        {/* <p>DATE ADDED</p>

        {products.map((product) => (
          <li className="text-white">{product.productName} Product Name: </li>
        ))}

        <i>Line</i>
        {products.map((product) => (
          <h1 className="text-white">{product.productName} Product Name: </h1>
        ))}

        {products.map((product) => (
          <p className="text-white">{product.brand}</p>
        ))} */}
      </article>
    </div>
  )
}
