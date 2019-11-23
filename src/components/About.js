import React, { Component } from 'react'
import university from '../assets/university.png';

class About extends Component {
  
  
  render() {
    return (
      <div className="about container">
        <div className="row">
          <div className="col s12 l6">
            <img src={university} alt="university"/>
          </div>
          <div className="col s12 l6">
            <h3 className="blue-text center">Conócenos</h3>
          </div>
        </div>
      </div>
      );
  }
}

export default About