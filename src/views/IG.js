import React, { Component } from 'react'
import Post from '../components/Post';

export default class IG extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount = async () => {
        const res = await fetch(`http://127.0.0.1:5000/api/posts`);
        const data = await res.json();
        console.log(data)
        const myPosts = data.posts
        this.setState({
            posts: myPosts
        })
    }

    render() {
        return (
            <div className='justify-content-around'>
                {this.state.posts.map((p, i)=><Post key={i} post={p}/>)}
            </div>
        )
    }
}
