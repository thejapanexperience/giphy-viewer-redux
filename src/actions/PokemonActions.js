import axios from 'axios';

export function fetchPokemon(pokemonId) {
  return {
    type: 'FETCH_POKEMON',
    payload: axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                  .then(res => res.data),
  };
}

// function receivePokemon(pokemon) {
//   return {
//     type: 'RECEIVE_POKEMON',
//     payload: pokemon,
//   };
// }
//
// function fetchPokemonStart() {
//   return {
//     type: 'FETCH_POKEMON_START',
//   };
// }
//
// function fetchPokemonError(err) {
//   return {
//     type: 'FETCH_POKEMON_ERROR',
//     payload: err,
//   };
// }
//
//
// export function fetchPokemon(pokemonId) {
//   return (dispatch) => {
//     dispatch(fetchPokemonStart());
//     axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//     .then(res => res.data)
//     .then((pokemon) => {
//       dispatch(receivePokemon(pokemon));
//     })
//     .catch((err) => {
//       dispatch(fetchPokemonError(err));
//     });
//   };
// }
