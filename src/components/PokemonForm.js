import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( { pokemon, setPokemon } ) {

  const [ formState, setFormState ] = useState( { name: "", hp: "", frontUrl: "", backUrl: "" } );

  function updateFormState( changeEvent ) {
    const updatedFormState = { ...formState };
    updatedFormState[ changeEvent.target.name ] = changeEvent.target.value;
    setFormState( updatedFormState );
  }

  function addPokemon() {
    const newPokemon = { name: formState.name, hp: formState.hp, sprites: { front: formState.frontUrl, back: formState.backUrl } };
    fetch( "http://localhost:3001/pokemon", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify( newPokemon ) } )
      .then( response => response.json() )
      .then( newPokemonData => {
        const updatedPokemon = [ ...pokemon, newPokemonData ];
        setPokemon( updatedPokemon );
      } );
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={ updateFormState } />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={ updateFormState } />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={ updateFormState }
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={ updateFormState }
          />
        </Form.Group>
        <Form.Button onClick={ addPokemon }>Submit</Form.Button>
      </Form>
    </div>
  );
  
}

export default PokemonForm;
