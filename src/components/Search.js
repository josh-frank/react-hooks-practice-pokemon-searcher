import React from "react";

function Search( { updateSearchQuery } ) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={ change => updateSearchQuery( change.target.value ) } />
        <i className="search icon" />
      </div>
    </div>
  );

}

export default Search;
