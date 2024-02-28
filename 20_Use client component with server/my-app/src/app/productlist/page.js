import Link from "next/link";
import React from "react";
import Product from "./product";

const fetchData = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
};
const ProductList = async () => {
  let products = await fetchData();
  // console.log(products);
  return (
    <div>
      <h1>Product List</h1>
      <Link href="/">Go to Home</Link>
      {products.map((product) => (
        <div>
          <h1 key={product.id}>Name: {product.title}</h1>
          <Product price={product.price} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
