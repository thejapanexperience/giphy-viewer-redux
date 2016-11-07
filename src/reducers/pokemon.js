export default function (state = {}, action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case 'FETCH_POKEMON_FULFILLED':
      return action.payload; // new Pokemon
    default:
      return state;
  }
}
