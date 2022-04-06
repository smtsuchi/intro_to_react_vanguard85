import React, { useState, useEffect } from 'react'

export default function ShopStripe() {
    const [products, setProducts] = useState([]);

    const STRIPE_SECRET_KEY = process.env.REACT_APP_S

    useEffect(async () => {
        console.log(STRIPE_SECRET_KEY)
        const res = await fetch(`https://api.stripe.com/v1/products`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${STRIPE_SECRET_KEY}`
            }
        });
        const data = await res.json();
        console.log(data)
        if (data.error) {
            console.log('tough')
        }
        else {
            setProducts(data.data)
        }
    }, [])


    return (
        <div className='row'>
            <div>
            <ul>
                {products.map((p, i) => <li key={p.id}>{p.name}</li>)}
            </ul>
            <form action='http://localhost:5000/api/stripe/create-checkout-session' method='POST'>
                <button type='submit' className='btn btn-primary'>Subscribe Pls</button>
            </form>
            </div>
        </div>
    )
}
