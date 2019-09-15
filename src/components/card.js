import React, { Component } from 'react';

import './../styles/cardStyle.css';

export default class Card extends Component {
  
  render() {
    return(
      <div className="card-perspective"> 
        <div className="card-transform">
          <div className="size front">
            <img 
              src={this.props.image}
              className="card-img-transform" 
              alt="A beautiful place"/>
            <div className="card-body-transform">
              <h5>{ this.props.name }</h5>
              <p>{ this.props.description }</p>
            </div>
          </div>
          <div className="size back">
            <h5>{ this.props.name }</h5>
          </div>
        </div>
      </div>
    )
  }
}
