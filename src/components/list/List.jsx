import React from "react";
import PropTypes from 'prop-types';

const List = ({ data }) => {
  // console.log(data);
  return (
      <li>
        <h2>{data.title}</h2>
        <img
          src={require(`../../../products/${data.sku}_1.jpg`)}
          alt="productImage"
        />
      </li>
  );
};

List.propTypes = {
  data: PropTypes.object,
}

export default List;
