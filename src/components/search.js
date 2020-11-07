import { Component, createElement } from '../lib/react/index.js'
import Form from './form.js'
import Input from './input.js'
import Button from './button.js'


class Search extends Component {
  render(){
    return Form({
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