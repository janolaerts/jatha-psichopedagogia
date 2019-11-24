import React, { Component } from 'react'
import university from '../assets/university.png';
import Thalia from '../assets/Thalia.png';

class About extends Component {
  
  
  render() {
    return (
      <div className="about container">
          <div style={{ marginTop: '30px' }} className="row center">
            <div className="col s12 m6">
              <p className="blue-text center" style={{ textAlign: 'justify', margin: '0' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure exercitationem ducimus adipisci quam maiores atque similique alias odio, error repellendus sed dignissimos voluptatem quae. Aspernatur, ratione! Odio magnam ipsam illum!</p>
            </div>
            <div className="col s12 m6">
              <img style={{ maxWidth: '200px' }} className="responsive-img" src={Thalia} alt="Thalia"/>
            </div>
            <div className="col s12 push-m6 m6">
              <p className="blue-text center" style={{ textAlign: 'justify', margin: '0' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure exercitationem ducimus adipisci quam maiores atque similique alias odio, error repellendus sed dignissimos voluptatem quae. Aspernatur, ratione! Odio magnam ipsam illum!</p>
            </div>
            <div className="col s12 pull-m6 m6">
              <img style={{ maxWidth: '200px' }} className="responsive-img" src={Thalia} alt="Thalia"/>
            </div>
          </div>
        <div className="img-wrapper center">
          <img style={{ marginBottom: '60px' }} className="responsive-img" src={university} alt="university"/>
        </div>
      </div>

      );
  }
}

export default About