import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import IG from './views/IG';
import Login from './views/Login';
import News from './views/News';
import Shop from './views/Shop';
import SignUp from './views/SignUp';
import SinglePost from './views/SinglePost';
import SingleProduct from './views/SingleProduct';

export default class App extends Component {
  constructor() {
    super();
    // console.log('MAIN APP: i have constructed')
    this.state = {
      age: 9000,
      people: ['andrew', 'david', 'anthony', 'tyler', 'tommy', 'april', 'christopher', 'dylan', 'jamia'],
      user: {}
    }
  }

  logMeIn = (userObj) => {
    this.setState({user: userObj})
  }
  logMeOut = () => {
    this.setState({user: {}})
  }

  happyBirthday = () => {
    this.setState(
      { age: this.state.age + 1 }
    )
  };

  componentDidMount() {
    // console.log("MAIN APP: I have mounted")
  }






  render() {
    // console.log("MAIN APP: I have rendered")
    return (
      <div>
        <Navbar currentUser={this.state.user} logMeOut={this.logMeOut} />
        {/* <h1>Hi, I am {this.state['name']} and my age is {this.state.age}</h1>
        <button onClick={()=>this.happyBirthday()}>Happy Birthday</button> */}
        <div className='container d-flex justify-content-center mt-4'>
          <Routes>
            <Route path='/' element={<Home name={this.state.name} />} />
            <Route path='/about' element={<About myClass={this.state.people} />} />
            <Route path='/news' element={<News />} />
            <Route path='/instagram' element={<IG />} />
            <Route path='/instagram/:postId' element={<SinglePost />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:productId' element={<SingleProduct />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='/login' element={<Login logMeIn={this.logMeIn}/>} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
      </div>
    )
  }
}