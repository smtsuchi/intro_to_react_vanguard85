import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { withParams } from '../hocs';

class SingleProduct extends Component {
    constructor() {
        super()
        this.state = {
            firstRender: true,
            product: {},
            redirect: false
        }
    }

    componentDidMount = async () => {
        const res = await fetch(`http://127.0.0.1:5000/api/products/${this.props.params.productId}`);
        const data = await res.json();
        console.log(data);
        if (data.status === 'ok') {
            this.setState({
                product: data.product,
                firstRender: false
            })
        }
        else {
            this.setState({redirect: true})
        }
    }

    addToCartAPI = async (product) => {
        const res = await fetch('http://localhost:5000/api/cart/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": this.props.user.token
            },
            body: JSON.stringify({product_id: product.id})
        });
        const data = await res.json();
        console.log(data)
    };


    render() {
        if (this.state.redirect) {
            return <Navigate to='/shop'/>
        }
        if(this.state.firstRender){
            return <h1>Loading..</h1>
        }
        const product = this.state.product
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" alt={product.product_name} />
                <div className="card-body">
                    <h5 className="card-title">{product.product_name}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                
                    
                <button type='submit' className="btn btn-primary" onClick={()=>{this.addToCartAPI(product); this.props.addToCart(product)}}>Add To Cart</button>
                
            </div>
        )
    }
};
export default withParams(SingleProduct)