import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

export default function SinglePost() {
    const [redirect, setRedirect ] = useState(false)
    const { postId } = useParams()


    const [post, setPost] = useState({})


    useEffect(async ()=>{
        const res = await fetch(`http://127.0.0.1:5000/api/posts/${postId}`);
        const data = await res.json();
        console.log(data)
        
        if (data.status === 'ok') {
            setPost(data.post)
        }
        else {
            setRedirect(true)
        }
    }, [])
    
    return redirect?
    (
        <Navigate to='/instagram' />
    )
    :
    (

        <div className="card" style={{ width: '18rem' }}>
            <img src={post.image} className="card-img-top" alt={post.title} />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.caption}</p>
            </div>
        </div>

    )
}
