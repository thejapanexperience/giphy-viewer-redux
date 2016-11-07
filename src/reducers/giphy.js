export default function (state = [], action) {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case 'FETCH_GIPHY_FULFILLED':
      return action.payload.data; // new Gifs
    default:
      return state;
  }
}
