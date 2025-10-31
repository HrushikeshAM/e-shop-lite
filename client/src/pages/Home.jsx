import React from "react";
import ProductsList from "../components/ProductsList";

const Home = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>All Products</h2>
      <ProductsList />
    </div>
  );
};

export default Home;
