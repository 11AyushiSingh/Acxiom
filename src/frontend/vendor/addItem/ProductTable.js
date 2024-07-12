import React from 'react';
import './ProductTable.css';

function ProductTable() {
  return (
    <div className="product-table">
      <div className="table-header">
        <span>
         <button>
         Product Image
        </button> 
        </span>
        <span>
         <button>
         Product Name
        </button> 
        </span>
        <span>
         <button>
         Product Price
        </button> 
        </span>
        <span>
         <button>
         Action
        </button> 
        </span>
        
      </div>
      <div className="table-row">
      <span>
         <button>
         Image
        </button> 
        </span>
        <span>
         <button>
         Image Name
        </button> 
        </span>
        <span>
         <button>
         Rs/-
        </button> 
        </span>


        <span>
          <button>Delete</button>
          <button>Update</button>
        </span>
      </div>
    </div>
  );
}

export default ProductTable;
