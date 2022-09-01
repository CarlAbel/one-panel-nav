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
    <div className="bg-primary-100">
      <div className="flex flex-col">
        <h1 className="text-white self-center pt-24 text-4xl">Products</h1>
      </div>
      <article className="p-8">
        {products.map((product) => (
          <div
            className="rounded-3xl w-74 h-72 p-4 bg-primary-400  mb-12"
            key={product.id}
          >
            <div className="flex flex-col">
              <div className="flex justify-between solidBorderB pb-2 ">
                <div>
                  <h1 className="text-white">
                    Ean-number: #{product.eanNumber}
                  </h1>
                  <p className="text-white">
                    Product added: {product.productAdded}
                  </p>
                </div>
                <img className="bg-primary-100 rounded-full w-12 h-12 p-6">
                  {product.image}
                </img>
              </div>
              <div className="flex items-center gap-4">
                <img className="bg-primary-100 rounded-full w-12 h-12 p-6">
                  {product.image}
                </img>
                <div>
                  <h2 className="text-white pb-2 pt-1">
                    Product: {product.brand} {product.productName}
                  </h2>
                  <p className="text-white text-xs capitalize">
                    {" "}
                    Categories: {product.productCategory}
                  </p>
                  <p className="lineBreak text-white text-xs">
                    {product.productDesc}
                  </p>
                </div>
              </div>
              <p className="text-white self text-sm self-center solidBorderB pr-10 pl-4">
                Stock count: {product.stock}
              </p>
              <div className="flex justify-between">
                <p className="text-white pt-6 pl-4">$ {product.price}</p>
                <p className="text-white pt-6 pr-4">$ {product.retailPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </article>
    </div>
  )
}
