// const sumar = (a, b) => {
//   let res = a + b
//   return res
// }

// let x = sumar(20, sumar(3, sumar(2, 2)))

// console.log(x)

// Preguntar un número y retornar el factorial

let usuario = prompt('numero')

const factorial = (num) => {
  let resultado = 1
  for( let i = 1; i <= num; i++ ){
    resultado = resultado * i
  }
  return resultado
}

console.log(factorial(usuario))




