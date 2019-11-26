import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [products] = useState([
    { name: 'Auto', price: 10, img: 'products/car.png', info: '¡Rum-rum! Con este Set de 13 piezas los peques de la casa podrán dar vida a sus propios karts de rally. Con un uniforme de carrera especial, la figura del conductor podrá realizar giros, piruetas y carreras extraordinarias. Es el juego perfecto para estimular el desarrollo de la mente en 3 dimensiones y la creatividad de forma divertida. ¡Las posibilidades de crear son infinitas! Edad: A partir de 3 años. Características: - Incluye 13 piezas - Incluye accesorios de radiocontrol - Formas: cuadrados, triángulos y rectángulos. - Las piezas son magnéticas y siempre se atraen, nunca se repelen. - Fabricadas en plástico ABS e imán de neodimio. - Compatible con los demás sets de Magformers. - Pilas AAA no incluidas Dimensiones: 16cm (Alto) x 14cm (Ancho) x 14cm (Largo)', alt: 'car', id: 1 },
    { name: 'Avion', price: 15, img: 'products/airplane.png', info: '¿A qué altura puede llegar esta avioneta turquesa? Los peques se lo pasarán genial haciendo volar esta veloz y furiosa avioneta clásica de hélice. ¡Animales a compartir contigo sus aventuras de vuelo! Edad: A partir de 12 mesos. Características: - Materiales de madera: Schima. - Materiales de plástico: PP y PE. Dimensiones: Avioneta: 8,1cm (Alto) x 15,1cm (Ancho) x 12,4cm (Largo) Packaging: 18cm (Alto) x 12cm (Ancho) x 12cm (Largo)', alt: 'airplane', id: 2 },
    { name: 'Gusano', price: 20, img: 'products/worm.png', info: 'Un gracioso juego de construcciones con el que los niños montan un gusano articulado. Con diseño en vivos colores, este juguete ayuda a desarrollar la motricidad fina y a aprender a combinar los colores. Además está realizado con un innovador plástico ecológico que es biodegradable. Fabricado en Italia. Edad: A partir de 2 años. Características: - Contiene 20 piezas. - Plástico eco-friendly. Dimensiones: 13,5cm x 22,5cm.', alt: 'worm', id: 3 },
    { name: 'Camión', price: 25, img: 'products/truck.png', info: 'Con este camión volquete los pequeñines podrán crear y representar nuevas aventuras en el mundo de la obra y la construcción. Además, incluye un muñeco constructor para completar la experiencia de juego. ¡Es perfecto para promover el juego creativo y el desarrollo de habilidades motrices gruesas! Edad: A partir de 2 años. Características: - Incluye: 1 camión volquete y 1 muñeco constructor. - Caja basculante elevable. - Fabricado con plástico. Dimensiones: Packaging: 11,5cm (Alto) x 10,5cm (Ancho) x 15,5cm (Largo)', alt: 'truck', id: 4 },
    { name: 'Bus', price: 30, img: 'products/bus.png', info: 'Al volante de este colorido camión, el buhito divertirá al bebé y le ayudará a desarrollar sus sentidos. Apilando las anillas mejorará su motricidad fina y coordinación ojo-mano. Y como el camión también se desplaza, el niño se animará a gatear para tratar de atraparlo. Edad: Desde los 9 meses. Características: - Anillas de perfil fino fáciles de agarrar por el bebé. - Base para apilar extraíble. - La base para apilar gira mientras el camión se mueve y hace sonidos de sonajero, para animar al niño a gatear. - Apilar las anillas contribuye al desarrollo de la motricidad fina y la coordinación ojo-mano del niño. - El camión, al moverse, anima al bebé a gatear y desarrollar así su motricidad gruesa.', alt: 'bus', id: 5 },
    { name: 'Tren', price: 35, img: 'products/train.png', info: 'Este tren de bloques de fantasía ofrece al peque infinidad de horas de juego con un montón de bonitas y coloridas piezas ilustradas. Además, podrán jugar libremente, cambiando las piezas de vagón y explorando sus posibles combinaciones. Edad: A partir de 18 meses. Características: - Incluye 17 piezas. - Materiales de madera: Schima y Tilo. Dimensiones: Tren: 12cm (Alto) x 8,2cm (Ancho) x 40,5cm (Largo) Packaging: 18cm (Alto) x 42cm (Ancho) x 9cm (Largo)', alt: 'train', id: 6 },
    { name: 'Mono', price: 40, img: 'products/monkey.png', info: 'Cuando las madres cuidan de los sus pequeños, ¡grandes historias pueden salir! “Cheeta&Bibi” son una pareja de monos madre e hijo ¡con muchas ganas de diversión! Los más pequeños de la casa van a poder sumergirse en un mundo de fantasía con las dos marionetas de peluche. Jugar con marionetas estimula de una manera única su imaginación y creatividad, y también les ayuda a empezar a expresarse en público. Edad: A partir de 3 años. Características: - Apto para manos de niño y adulto - Cuerpo 85% de algodón y 15% poliéster - Lavable Dimensiones: 11,5cm (Alto) x 30cm (Ancho) x 34cm (Largo)', alt: 'monkey', id: 7 },
    { name: 'Peluche', price: 45, img: 'products/bear.png', info: 'Este enorme osito está esperando que lo adopten. Es blandito y muy suave para que el peque se duerma abrazadito a él, convirtiéndose en su compañero durante años y años. Edad: Desde el nacimiento. Características: - Muy suave. - Lavable a 30ºC. Dimensiones: 50cm (Alto)', alt: 'teddy', id: 8 }
  ])

  const [details, setDetails] = useState({});
  const [added, setAdded] = useState([]);
  const [itemToIncrement, setItemToIncrement] = useState({});
  let [amount, setAmount] = useState(0);
  console.log(itemToIncrement);

  const addToCart = (item) => {
    setAdded([...added, item]);
  }

  return(
    <StoreContext.Provider value={{products, details, setDetails, added, setAdded, addToCart, itemToIncrement, setItemToIncrement, amount, setAmount}}>
      { props.children }
    </StoreContext.Provider> 
  );
}

export default StoreContextProvider