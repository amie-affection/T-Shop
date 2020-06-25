import React from 'react';
import Sold from '../sold/Sold';

const Wrapper = ({ children, title }) => {
    // console.log(children.props.data.availableSizes);
    const availableSizes = children.props.data.availableSizes.length;
    // console.log(availableSizes);
    return <>
        <h2>{title}</h2>
        {availableSizes !== 0 ? children : <Sold/>}
        </>
};

export default Wrapper;