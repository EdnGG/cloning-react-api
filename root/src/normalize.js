function movieListAsMap (newList, oldList = new Map()){
  return newList.reduce((list, movie) => { 
    list.set(movie.id, movie)
    return list
  }, oldList)
} 

function getAllIds(list, oldList = []){
  return oldList.concat(list.map(movie => movie.id))
}

function getLeastValuedIds (list, oldList = []) {
  return list.reduce((list, movie) => {
    if(movie.vote_average <= 7){
      list.push(movie.id)
    }
    return list
  }, oldList)
}

function getMostValuedIds(list, oldList = []){
  return list.reduce((list, movie) => {
    if(movie.vote_average > 7){
      list.push(movie.id)
    }
    return list
  }, oldList)
}

export {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValuedIds,
}




/* 
Teniendo esta funcion en cuenta, usando el metofdo reduce:
list.reduce((list, movie) => {
  if(movie.vote_average > 7.5){
    list.push(movie)
  }
}, []) -> donde [] es el parametro list
 
list es el array []
*/

// const all = rawMoviesList.map((movie) => {
//   return movie.id
// })

// // console.log(all)




// console.log(popular)

// const notPopular = rawMoviesList.reduce((list, movie) => {
//   if(movie.vote_average <= 7){
//     list.push(movie.id)
//   }
//   return list
// }, [])

// console.log(notPopular)


/* 
sacar elementos anidados de un array a un array plano
funciona quitandole los curly brackets

const anidado = [1, 2, [3, 4], 5, 6, [7, 8]]

const flatArray = anidado.reduce((acc, el) => 
  acc.concat(el), [])

console.log(flatArray)

const mascotas = [
  {nombre: 'eden',edad: 56 ,genero: 'male'},
  {nombre: 'alfredo',edad:23 ,genero: 'male'},
  {nombre: 'patricia',edad: 60 ,genero: 'female'},
  {nombre: 'adriana',edad:31 ,genero: 'female'},
  {nombre: 'sophia',edad: 6 ,genero: 'female'},
  {nombre: 'lucia',edad:2 ,genero: 'female'},
]

const indexed = mascotas.reduce((acc, el) => ({
  ...acc,
  [el.nombre]: el
}), {})

console.log(indexed)
console.log(indexed['patricia'])
*/ 

