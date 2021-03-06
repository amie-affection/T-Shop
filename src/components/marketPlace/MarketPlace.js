import React from "react";
import PropTypes from "prop-types";
import List from "../list/List";
import Close from "../close/Close";
import Wrapper from "../wrapper/Wrapper";

const MarketPlace = ({ products }) => {
  return (
    <>
      {products.length !== 0 ? (
        <ul>
          {products.map((product) => (
            <Wrapper key={product.id} title={"T-SHIRT"}>
              <List key={product.id} data={product} />
            </Wrapper>
          ))}
        </ul>
      ) : (
        <Close />
      )}
    </>
  );
};

MarketPlace.propTypes = {
  products: PropTypes.array,
};

export default MarketPlace;
