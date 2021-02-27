import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( { pokemon } ) {

  const { name, hp, sprites } = pokemon;

  const [ currentSprite, toggleCurrentSprite ] = useState( "front" );

  return (
    <Card onClick={ () => toggleCurrentSprite( currentSprite === "front" ? "back" : "front" ) }>
      <div>
        <div className="image">
          <img src={ sprites[ currentSprite ] } alt={ name } />
        </div>
        <div className="content">
          <div className="header">{ name }</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            { hp } hp
          </span>
        </div>
      </div>
    </Card>
  );

}

export default PokemonCard;
