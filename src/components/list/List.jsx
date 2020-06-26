import React from "react";
import PropTypes from "prop-types";

const transformString = (str) => Number(str);

const List = ({ data: { title, sku } }) => {
  const change = transformString
  // console.log(data);
  return (
    <li>
      <h2>{title}</h2>
      <img
        src={require(`../../../products/${sku}_1.jpg`)}
        alt="productImage"
      />
    </li>
  );
};

List.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    sku: PropTypes.number,
  }),
};

export default List;
