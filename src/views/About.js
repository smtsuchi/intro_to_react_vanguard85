import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className='shoha'>
          <ul>
            {this.props.myClass.map((person,i)=><li key={i} >{person}</li>)}
          </ul>
      </div>
    )
  }
}
