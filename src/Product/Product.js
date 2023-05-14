import React from 'react';
import PropTypes from 'prop-types';
import "./Product.css"

const Product = props => {
    return (
        <div className={"Product"}>
            <span>{ props.name }:</span>
            <span>{ props.cost }</span>
        </div>
    );
};

Product.propTypes = {
    
};

export default Product;