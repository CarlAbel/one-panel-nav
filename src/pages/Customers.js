import { useEffect, useState, useContext } from "react"
import TokenContext from "../context/TokenContext"
import FeatherIcon from "feather-icons-react"
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
  })
  return (
    <div className="bg-primary-100">
      <div className="flex flex-col">
        <h1 className="text-white self-center pt-24 text-4xl">Customers</h1>
      </div>

      <article className="p-6">
        {products.map((product) => (
          <div className="rounded-3xl w-74 h-72 p-4 bg-primary-400  mb-12">
            <div className="flex flex-col">
              <h1 className="text-white">Ean-number: #{product.eanNumber}</h1>
              <h2 className="text-white">
                Product Name: {product.brand} {product.productName}
              </h2>
              <p className="text-white">{product.productCategory}</p>
              <p className="lineBreak text-white">{product.productDesc}</p>
              <p className="text-white self-center ">
                Stock count: {product.stock}
              </p>
              <div className="flex justify-between">
                <p className="text-white pt-8">{product.price}</p>
                <p className="text-white pt-8">{product.retailPrice}</p>
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
