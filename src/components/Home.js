import React, { Component } from 'react'
import Books from '../assets/services/books.png'
import Children from '../assets/services/children.png'
import Colors from '../assets/services/colors.png'
import Monkeys from '../assets/services/monkeys.png'
import People from '../assets/services/public.png'
import Stuff from '../assets/services/schoolstuff.png'
import Stories from '../assets/services/storybooks.png'
import Studying from '../assets/services/studying.png'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
//import Modal from './Modal';
 
class Home extends Component {
  state = {
    services: [
      { title: 'Reforzamiento Escolar', content: 'Reforzamiento en cursos. Reforzamiento en idiomas Inglés y Francés. Circulo de lectura. Oratoria. Técnicas de estudio.', picture: Books, id: 'a' },
      { title: 'Atención Personalizada', content: 'Problemas de aprendizaje y conducta. Son dificultades que afectan la dificultad del niño de recibir, procesar, analizar y almacenar información.', picture: Children, id: 'b' },
      { title: 'Talleres', content: 'Realizados talleres y charlas personalizadas de acuerdo con las necesidades de la institución educativa.', picture: Colors, id: 'c' },
      { title: 'Fiestas Educativas', content: 'Vive una fiesta de manera distinta en la cual podrás divertirte y aprender a la vez. Fiestas personalizadas guiadas por psicólogas educativas. Nuestra finalidad es arrollar y potenciar habilidades en los niños a travéz del juego y la experiencia. En cada fiesta se eligen actividades según la edad y preferencia del cliente.', picture: Monkeys, id: 'd' },
      { title: 'Charlas Educativas', content: '', picture: People, id: 'e' },
      { title: 'Inducción a kínder', content: 'El desapego del niño es un hecho importante para que pueda independizarse en el futuro. Nosotras nos encargamos de desarrollar, en diferentes sesiones, herramientas que posibiliten que el cambio de hogar a escuela no sea difícil y que los niños logren la capacidad de adaptarse al nuevo entorno sin necesidad de generar un rechazo.', picture: Stuff, id: 'f' },
      { title: 'Aprendizaje y Conducta', content: 'En el taller nos enfocamos en ampliarle el panorama a los maestros acerca de los diferentes problemas que existen en el aprendizaje. Asimismo, brindamos estrategias y herramientas de solución ante las diversas situaciones que se puedan presentar.', picture: Stories, id: 'g' },
      { title: 'Orientación Vocacional', content: 'Es proceso que tiene como propósito proveer elementos y herramientas para garantizar una mejor elección de una vocación ya que permite que los jóvenes esclarezcan sus dudas acerca de su futuro profesional. Esto incluye entrevistas con el evaluado, evaluación integral, entrega de un perfíl psicólogo, feedback personal, consulta con los padres acerca del rol que tienen en este proceso y un taller grupal.', picture: Studying, id: 'h' }
    ],
    title: '',
    picture: '',
    content: '',
  }

  componentDidMount() {
    const modal = document.querySelector('.modal');
    M.Modal.init(modal);
  }

  changeContent = (item) => {
    this.setState({
      ...this.state.services, 
      title: item.title,
      picture: item.picture,
      content: item.content
    });
  }

  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="row grid">
            { this.state.services.map(item => {
              return (
                  <div className="col s12 m6 center" key={item.id}>
                    <div className={`wrapper ${ item.id }`}>
                      <h5 className="blue white-text">{ item.title }</h5>
                      <div className="spacer"></div>
                      <div className="modal" id="services">
                        <div className="modal-content">
                          <h2 className="center blue-text">{ this.state.title }</h2>
                          <img className="responsive-img" src={ this.state.picture } />
                          <p className="blue-text" style={{ textAlign: 'justify' }}>{ this.state.content }</p>
                        </div>
                        <div className="modal-footer">
                          <button className="btn btn-center modal-close blue">Cerrar</button>
                        </div>
                      </div>
                      <button href="#services" className="btn btn-small waves-effect waves-light blue modal-trigger" onClick={() => this.changeContent(item)}>
                        <span>Leer más</span>
                        <i className="material-icons left">add</i>
                      </button>
                    </div>
                  </div>
              )
            }) }
          </div>
        </div>
      </div>
    );
  }
}

export default Home