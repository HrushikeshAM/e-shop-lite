import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={
          product.image ||
          "https://via.placeholder.com/200x200.png?text=No+Image"
        }
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div className="price">₹{product.price}</div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
