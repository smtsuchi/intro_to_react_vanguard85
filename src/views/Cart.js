import React from 'react';
import './Cart.css';

export default function Cart({ cart, sumTotalCart, removeFromCart, user }) {
    const getQuantity = (cartItem, cartList) => {
        let count = 0;
        for (let item of cartList) {
            if (cartItem.id === item.id) {
                count++;
            }
        }
        return count
    };
    const getUniqueCart = (cartList) => {
        let uniqueCart = [];
        let ids = new Set();
        for (let item of cartList) {
            if (!ids.has(item.id)) {
                uniqueCart.push(item);
                ids.add(item.id);
            }
        }
        return uniqueCart
    };

    const removeFromCartAPI = async (p) => {
        const res = await fetch('http://localhost:5000/api/cart/remove', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": user.token
            },
            body: JSON.stringify({product_id: p.id})
        });
        const data = await res.json();
        console.log(data)
    };

    return (
        <div className='shoha'>
            <h1>Cart:</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {getUniqueCart(cart).map(item =>
                    (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.product_name}</td>
                            <td>{getQuantity(item, cart)}</td>
                            <td>{item.price}</td>
                            <td>{(getQuantity(item, cart) * item.price).toFixed(2)}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => {removeFromCartAPI(item);removeFromCart(item)}}>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>TOTAL</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{sumTotalCart(cart)}</td>
                        <td>
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}
