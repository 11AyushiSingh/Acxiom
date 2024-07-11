import React from 'react';
import './ProductTable.css';

function ProductTable() {
  return (
    <div className="product-table">
      <div className="table-header">
        <span>Product Image</span>
        <span>Product Name</span>
        <span>Product Price</span>
        <span>Action</span>
      </div>
      <div className="table-row">
        <span>Image</span>
        <span>Image Name</span>
        <span>Rs/-</span>
        <span>
          <button>Delete</button>
          <button>Update</button>
        </span>
      </div>
    </div>
  );
}

export default ProductTable;
