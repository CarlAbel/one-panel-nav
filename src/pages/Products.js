export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <article>
        <div className="">
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
        </div>
      </article>
    </>
  );
}
