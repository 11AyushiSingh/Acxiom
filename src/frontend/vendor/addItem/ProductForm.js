import React from 'react';
import './ProductForm.css';

function ProductForm() {
  return (
    <div className="product-form">
      <input type="text" placeholder="Product Name" />
      <input type="text" placeholder="Product Price" />
      <input type="file" />
      <button>Add The Product</button>
    </div>
  );
}

export default ProductForm;
