import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        const a = this.props.article
        return (
            <a href={a.url} target='_blank' class="card text-decoration-none text-dark mb-3" style={{ width: '18rem', }}>
                <img src={a.urlToImage} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{a.title}</h5>
                    <h6>{a.author ? a.author : 'unknown'} - {a.source.name}</h6>
                    <p class="card-text">{a.description}</p>
                </div>
            </a>
        )
    }
}
