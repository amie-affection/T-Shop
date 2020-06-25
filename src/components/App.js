import React, {Fragment} from "react";
import MarketPlace from "./marketPlace/MarketPlace";
import products from '../../src/products.json';
import Wrapper from "./wrapper/Wrapper";

console.log(products);

const App = () => {
  return (
    <>
      <MarketPlace products={products} />
    </>
  );
};

export default App;
