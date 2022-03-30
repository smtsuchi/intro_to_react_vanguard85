import React, { Component } from 'react'
import Article from '../components/Article';

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount = async () => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=4ba2cb57066b49e2b7a8f20f5e0f65c6`);
        const data = await res.json();
        console.log(data)
        const myArticles = data.articles
        this.setState({
            articles: myArticles
        })
    }

    render() {
        console.log(this.state.articles)
        return (
            <div className='row justify-content-around'>
                {this.state.articles.map((a, i)=><Article key={i} article={a}/>)}
            </div>
        )
    }
}
