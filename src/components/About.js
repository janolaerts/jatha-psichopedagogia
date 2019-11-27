import React, { Component } from 'react'
import university from '../assets/university.png';
import Thalia from '../assets/Thalia.png';
import Jacky from '../assets/Jacky.png'

class About extends Component {
  
  
  render() {
    return (
      <div className="about container">
          <div style={{ marginTop: '30px' }} className="row center">
            <div className="col s12 m6">
              <p className="blue-text center" style={{ textAlign: 'justify', margin: '0' }}>Soy <strong>Thalia</strong>, psicóloga egresada de la universidad de Lima, con experiencia en el área educativa y organizacional,  he tenido la oportunidad de viajar y poder ver la realidad del ámbito educativo en distintas culturas, por tal motivo, nació mi iniciativa de comenzar con este proyecto jathapsicopedagogia ya que apuesto por una mejor educación en Perú y América Latina y consideró que si se puede lograr si todos nos proponemos la meta de mejorar. Mi motivación es poder cambiar la mentalidad de muchas personas que todavía se basan en la educación tradicional yo apuesto por educación a través del juego ya que el niño aprende más cuando está en contacto con el ambiente y tiene la oportunidad de experimentar.</p>
            </div>
            <div className="col s12 m6" style={{ marginTop: '40px' }}>
              <img style={{ maxWidth: '250px' }} className="responsive-img" src={Thalia} alt="Thalia"/>
            </div>
          </div>
          <div className="row center" style={{ marginTop: '30px' }}>
            <div className="col s12 m6 push-m6">
              <p className="blue-text center" style={{ textAlign: 'justify', margin: '0' }}>Hola soy <strong className="bold blue-text">Jackeline</strong>, psicóloga educativa de Universidad de Lima, he trabajado en el Colegio nacional Héroes del Cenepa, en el colegio de niños especiales La Alegría en el Señor y en el Colegio Maria Reina Marianistas, he trabajado tanto con niños como con adolescentes. Lo que me motivo a realizarse Jathapsicopedagia es el poder contribuir a una mejor educación en nuestros niños y adolescentes, basándome en la idea de que las experiencias y el juego son la mejor manera de tener un aprendizaje significativo.</p>
            </div>
            <div className="col s12 m6 pull-m6" style={{ marginTop: '40px' }}>
              <img style={{ maxWidth: '250px' }} className="responsive-img" src={Jacky} alt="Jacky"/>
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