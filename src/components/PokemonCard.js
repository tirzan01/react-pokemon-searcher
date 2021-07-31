import React, { useEffect } from 'react'
import { Card } from 'semantic-ui-react'

  const PokemonCard = ({ pokemon, shouldImgUpdate }) => {

    const [activeImg, changeImg] = React.useState(pokemon.sprites.front)

    useEffect(() => {
      if(activeImg !== pokemon.sprites.front && activeImg !== pokemon.sprites.back) changeImg(pokemon.sprites.front)
    })

     return (<Card>
        <div key={pokemon.id}>
          <div className="image">
            <img src={activeImg} alt="oh no!" onClick={() => activeImg === pokemon.sprites.front ? changeImg(pokemon.sprites.back) : changeImg(pokemon.sprites.front)} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>)
  }


export default PokemonCard
