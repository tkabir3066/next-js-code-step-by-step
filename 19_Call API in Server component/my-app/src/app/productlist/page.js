import React from "react";

const fetchData = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
};
const ProductList = async () => {
  let products = await fetchData();
  console.log(products);
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <h1 key={product.id}>
          Name: {product.title}, Price: {product.price}
        </h1>
      ))}
    </div>
  );
};

export default ProductList;
