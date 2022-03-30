import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        const p = this.props.post
        return (
            <a href='/instagram' class="card text-decoration-none text-dark" style={{ width: '18rem' }}>
                <img src={p.image} class="card-img-top" alt={p.title} />
                <div class="card-body">
                    <h5 class="card-title">{p.title}</h5>
                    <p class="card-text">{p.caption}</p>
                </div>
            </a>
        )
    }
}
