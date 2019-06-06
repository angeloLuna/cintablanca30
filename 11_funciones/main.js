// ECMA 5
// var letra = 'u'
// function suma(perrito, gatito) {
//   console.log(perrito + gatito)
// }

// ECMA 6
// let numero = 10
// const precio = 20
const suma = (a, b) => {
  let resultado = a + b
  return resultado
}

let res = suma(suma(10, 10), 20)


console.log(res)
