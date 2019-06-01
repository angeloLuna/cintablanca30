// let persona = {
//   nombre: 'angelo',
//   edad: 28,
//   email: 'angel.luna@grow.mobi',
//   direccion: {
//     calle: 'agustin melgar',
//     exterior: '44',
//     colonia: 'condesa'
//   },
//   bandasFavoritas: ['muse', 'alabama shakes', 'pate de fua']
// }
// console.log(persona)

const opciones = {
  piedra: 'piedra',
  papel: 'papel',
  tijera: 'tijera',
}

let jugador1 = opciones.piedra
let jugador2 = opciones.tijera

if (jugador1 === jugador2) {
  console.log('empate')
} else {
  if (jugador1 === opciones.papel) {
    if(jugador2 === opciones.tijera) {
      console.log('gana jugador 2')
    } else {
      console.log('gana jugador 1')
    }
  } else if (jugador1 === opciones.piedra) {
    if (jugador2 === opciones.papel) {
      console.log('gana jugador 2')
    } else {
      console.log('gana jugador 1')
    }
  } else {
    if (jugador2 === opciones.papel) {
      console.log('gana jugador 1')
    } else {
      console.log('gana jugador 2')
    }
  }
}

if (jugador1 === opciones.papel){
  if (jugador2 === opciones.papel) {
    console.log('empate')
  } else if (jugador2 === opciones.piedra) {
    console.log('jugador 1')
  } else {
    console.log('gana jugador 2')
  }
} else if(jugador1 === opciones.piedra) {
  if (jugador2 === opciones.papel) {
    console.log('gana jugador 2')
  } else if (jugador2 === opciones.piedra) {
    console.log('empate')
  } else {
    console.log('gana jugador 1')
  }
} else {
  if (jugador2 === opciones.papel) {
    console.log('gana jugador 2')
  } else if (jugador2 === opciones.piedra) {
    console.log('gana jugador 1')
  } else {
    console.log('empate')
  }
}