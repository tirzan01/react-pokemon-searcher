import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor() {
    super()

    this.state = {
      searchPokemon: '',
      pokemons: []
    }
  }

  createNewPokemon = pokemon => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pokemon)
    })
      .then(resp => resp.json())
      .then(pokemon => {
        this.setState(prevState => {
          return {
            pokemons: [...prevState.pokemons, pokemon]
          }
        })
      })
  }

  searchPokemonOnChange = searchPokemon => {
    this.setState({
      searchPokemon 
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createNewPokemon={this.createNewPokemon} />
        <br />
        <Search searchPokemonOnChange={this.searchPokemonOnChange} searchPokemon={this.state.searchPokemon} />
        <br />
        <PokemonCollection pokemons={this.state.searchPokemon ? this.state.pokemons.filter(p => p.name.startsWith(this.state.searchPokemon)) : this.state.pokemons} />
      </Container>
    )
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemons => {
        this.setState({
          pokemons
        })
      })
  }
}

export default PokemonPage
