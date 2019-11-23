import React from 'react';
import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';

const Footer = () => {
  return (
      <div className="footer footer-copyright blue">
        <div className="container white-text center">
          <div className="row">
            <div className="col s4">
              <h6>&copy; Jatha</h6>
            </div>
            <div className="img-wrapper center-align">
            <div className="col s4">
              <a target="_blank" href="https://www.facebook.com/pg/Jatha-Psicopedagog%C3%ADa-449136569204054/photos/?ref=page_internal"><img style={{ width: '30px', position: 'relative', top: '10px', cursor: 'pointer' }} src={facebook} alt="facebook"/></a>
            </div>
            <div className="col s4">
              <a target="_blank" href="https://www.instagram.com/jathapsicopedagogia/"><img style={{ width: '30px', position: 'relative', top: '10px', cursor: 'pointer' }} src={instagram} alt="instagram"/></a>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer