import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PokemonActions from '../actions/PokemonActions';

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemonId: 0,
    };
    this._onInputChange = this._onInputChange.bind(this);
  }

  _onInputChange(e) {
    this.setState({
      pokemonId: e.target.value,
    });
  }

  render() {
    const { pokemonId } = this.state;
    const { pokemon, fetchPokemon } = this.props;

    return (
      <div>
        <h1>Pokemon</h1>
        <input type="number" placeholder="Pokemon Number" value={pokemonId} onChange={this._onInputChange} />
        <h3>pokemonId: {pokemonId}</h3>
        <button onClick={() => fetchPokemon(pokemonId)}>Fetch</button>
        <div>
          Pokemon Name: {pokemon.name}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemon(pokemonId) {
    dispatch(PokemonActions.fetchPokemon(pokemonId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
