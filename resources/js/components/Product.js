import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Product = ({product}) => {

    if(!product){
        return <div>No product selected!</div>
    }

    return (
        <div>
            <h2>Name: {product.naziv} </h2>
            <h3>Price: {product.cena} </h3>
        </div>
    );
}

export default Product;