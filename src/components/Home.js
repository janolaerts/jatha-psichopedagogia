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
      { title: 'Reforzamiento Escolar', picture: Books, id: 'a' },
      { title: 'Atención Personalizada', picture: Children, id: 'b' },
      { title: 'Talleres', picture: Colors, id: 'c' },
      { title: 'Fiestas Educativas', picture: Monkeys, id: 'd' },
      { title: 'Charlas Educativas', picture: People, id: 'e' },
      { title: 'Inducción a kínder', picture: Stuff, id: 'f' },
      { title: 'Aprendizaje y Conducta', picture: Stories, id: 'g' },
      { title: 'Orientación Vocacional', picture: Studying, id: 'h' }
    ],
    title: '',
  }

  componentDidMount() {
    const modal = document.querySelector('.modal');
    M.Modal.init(modal);
  }

  changeTitle = (title) => {
    this.setState({
      ...this.state.services, 
      title: title,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestias consectetur, possimus expedita reiciendis cum nihil perferendis illo ex? Aliquid, earum? Mollitia quasi unde porro sequi dolorem nobis saepe iste.',
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
                          <p className="blue-text">{ this.state.content }</p>
                        </div>
                        <div className="modal-footer">
                          <button className="btn btn-center modal-close blue">Cerrar</button>
                        </div>
                      </div>
                      <button href="#services" className="btn btn-small waves-effect waves-light blue modal-trigger" onClick={() => this.changeTitle(item.title)}>
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