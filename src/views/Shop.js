import React, { useEffect, useState } from 'react'
import Product from '../components/Product';

export default function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(async ()=>{
        const res = await fetch(`http://localhost:5000/api/products`);
        const data = await res.json();
        if (data.status === 'ok') {
            setProducts(data.products)
        }
        else {
            // redirect
        }
    },[])


  return (
    <div className='row'>
        {products.map((p, i)=><Product key={i} product={p}/>)}
    </div>
  )
}
