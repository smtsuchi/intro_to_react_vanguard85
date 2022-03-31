import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Post extends Component {
    render() {
        const p = this.props.post
        return (
            <Link to={`/instagram/${p.id}`} className="card text-decoration-none text-dark" style={{ width: '18rem' }}>
                <img src={p.image} className="card-img-top" alt={p.title} />
                <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text">{p.caption}</p>
                </div>
            </Link>
        )
    }
}
