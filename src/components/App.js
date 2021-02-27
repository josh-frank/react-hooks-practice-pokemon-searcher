import { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [ pokemon, setPokemon ] = useState( [] );
  const [ searchQuery, updateSearchQuery ] = useState( "" );

  useEffect( () => {
    fetch( "http://localhost:3001/pokemon" ).then( response => response.json() ).then( setPokemon );
  }, [] );

  return (
    <div className="App">
      <PokemonPage pokemon={ pokemon } setPokemon={ setPokemon } searchQuery={ searchQuery } updateSearchQuery={ updateSearchQuery } />
    </div>
  );

}

export default App;
