import React, { Component } from 'react';
import Card from './card';
import data from './../data';

export default class Layout extends Component {

  renderImage() {
    return data.images.map((item, index) => {
      return (
        <div className="col-12 col-sm-6 col-lg-4 mt-5" key={index}>
          <Card name={item.name} description={item.description} image={item.image} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          { this.renderImage() }
        </div>
      </div>
    ); 
  }
}