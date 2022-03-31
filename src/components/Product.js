import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <ul className="list-group list-group-flush">

                <li className="list-group item">
                    <Link to={`/shop/${product.id}`}>
                        <img src={ product.image } className="card-img-top" alt={ product.product_name }/>
                            <div className="card-body">
                                <h5 className="card-title">{ product.product_name }</h5>
                                <p className="card-text">{ product.price }</p>
                            </div>
                    </Link>
                </li>
                <li className="list-group item">
                    <a href="/" className="btn btn-primary">Add To Cart</a>
                </li>
            </ul>
        </div>
    )
}
