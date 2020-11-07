import { Component, createElement } from '../lib/react/index.js'
import Form from './form.js'
import Input from './input.js'
import Button from './button.js'
import store from '../store.js'
import { SEARCH_MOVIE, SET_FILTER } from '../actions/index.js'

class Search extends Component {
  // propiedad como metodo
  handleSubmit = (event) =>{
    event.preventDefault()
    const formData = new FormData(event.target)
    const query = formData.get('title')
    if (query){
      return store.dispatch({
        type: SEARCH_MOVIE ,
        payload: query
      })
    }
    return store.dispatch({
      type: SET_FILTER,
      payload: 'all'
    })
    const movies = searchMovie(query)
    console.log(movies)
    if (movies){
      return render(movies)
    }
    return alert('Movie not found :(')
  }
  render(){
    return Form({
      onSubmit: this.handleSubmit,
      children:[
        new Input({
          placeholder: 'Type your favorite movie',
          name: 'title',
          type: 'text',
        }),
        new Button(null, 'Search'),
      ]
    })
  }
}

 export default Search