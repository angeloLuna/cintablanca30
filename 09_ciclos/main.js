
// let nombre = prompt('nombre')
// let array = ['s', 'q', '2', 'l']

// for (let i = 0; i < nombre.length ; i++ ) {
//   nombre[i] = 'a'
//   array[i] = 'a'
// }


// let palabra = 'perritos'
// let x = 10

// console.log( x + 10)



// console.log(nombre)
// console.log(array)


// i = i + 1

// i += 1

// i++

// const array = [2, 8, 13, 24, 20, 6]
// let resultado = 0

// for (let i = 0; i < array.length; i++) {
//   if( i < array.length - 1){
//     let multiplicacion = array[i] * array[i + 1 ]
//     console.log(multiplicacion)
//     if(multiplicacion > resultado) {
//       resultado = multiplicacion
//     }
//   }
// }

// console.log('resultado', resultado)

const frase = prompt('palabra')
let derecho = ''
let reversa = ''

for (i = 0; i < frase.length; i++) {

  let end = frase.length - 1

  if(frase[i] != ' ' ){
    derecho += frase[i]
  }

  if (frase[end - i] != ' '){
    reversa += frase[end - i]
  }
}

if (derecho === reversa){
  console.log('Es palindromo')
} else {
  console.log('no es palindromo')
}




