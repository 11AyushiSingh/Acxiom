import React, { useState } from 'react';
import './ProductForm.css';

function ProductForm() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Product Name:', productName);
    console.log('Product Price:', productPrice);
    console.log('Product Image:', productImage);
    // Reset form fields if needed
    setProductName('');
    setProductPrice('');
    setProductImage(null);
  };

  return (
    <div className="product-form">
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Product Price"
        value={productPrice}
        onChange={handlePriceChange}
      />
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Add The Product</button>
    </div>
  );
}

export default ProductForm;
