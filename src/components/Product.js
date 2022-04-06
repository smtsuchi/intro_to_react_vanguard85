import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ addToCart, product, user }) {
    const addToCartAPI = async (product) => {
        const res = await fetch('http://localhost:5000/api/cart/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": user.token
            },
            body: JSON.stringify({product_id: product.id})
        });
        const data = await res.json();
        console.log(data)
    };
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
                    <button onClick={()=>{addToCartAPI(product);addToCart(product)}} className="btn btn-primary">Add To Cart</button>
                </li>
            </ul>
        </div>
    )
}
