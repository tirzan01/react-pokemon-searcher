import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
          <input className="prompt" value={props.searchPokemon} onChange={e => props.searchPokemonOnChange(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
