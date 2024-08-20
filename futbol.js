//2.  Desarrolla una aplicación web para gestionar equipos de fútbol y los jugadores que forman parte de ellos. La aplicación debe permitir a los usuarios agregar detalles sobre los equipos y los jugadores. Cada jugador debe estar asociado a un único equipo mediante composición, indicando que cada jugador pertenece a un equipo específico. La interfaz debe incluir campos para ingresar el nombre del jugador, el nombre del equipo, y un botón para mostrar los detalles del jugador y el equipo al que pertenece. Utiliza dos archivos: futbol.html para la interfaz y futbol.js para la lógica, utilizando las clases Jugador y Equipo

class Equipo {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class Jugador {
  constructor(nombre, nombre_equipo) {
    this.nombre = nombre;
    //Se crea un nuevo objeto de la clase Equipo con el nombre del equipo recibido y se asigna al atributo 'equip'
    this.equip = new Equipo(nombre_equipo); // aqui esta la composicion
  }

  infojugador() {
    return `El jugador ${this.nombre} está en el equipo ${this.equip.nombre}`;
  }
}

document.querySelector("#AñadirJugador").addEventListener("click", () => {
  let nombreE = document.getElementById("nombreE").value;
  let nombreJ = document.getElementById("nombreJ").value;

  let mostrarJugadores = document.getElementById("mostrarJugadores");

  let jugador = document.createElement("li");      // Crea un nuevo elemento de lista (li) para el nuevo jugador


  mostrarJugadores.appendChild(jugador);

  let jugadorr = new Jugador(nombreE, nombreJ);   

  let detalle = jugadorr.infojugador();

  jugador.innerText = detalle;
});
