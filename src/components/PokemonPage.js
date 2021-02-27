import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage( { pokemon, setPokemon, searchQuery, updateSearchQuery } ) {
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={ pokemon } setPokemon={ setPokemon } />
      <br />
      <Search updateSearchQuery={ updateSearchQuery } />
      <br />
      <PokemonCollection pokemon={ pokemon.filter( pokemon => pokemon.name.toLowerCase().includes( searchQuery.toLowerCase() ) ) } />
    </Container>
  );
  
}

export default PokemonPage;
