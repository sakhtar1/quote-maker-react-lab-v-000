<<<<<<< HEAD
const quotes = (state = [], action) => {
  let index;
    let quote;
    switch(action.type) {

      case 'ADD_QUOTE':
        return state.concat(action.quote);

      case 'REMOVE_QUOTE':
        return state.filter(quote => quote.id !== action.quoteId);

      case 'UPVOTE_QUOTE':
        quote = state.find(quote => quote.id === action.quoteId)
        index = state.indexOf(quote);

        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes += 1 }),
          ...state.slice(index + 1)
        ];

        case 'DOWNVOTE_QUOTE':
          quote = state.find(quote => quote.id === action.quoteId);
          index = state.indexOf(quote);
           if (quote.votes > 0) {
            return [
              ...state.slice(0, index),
              Object.assign({}, quote, { votes: quote.votes -= 1 }),
              ...state.slice(index + 1)
            ];
          }
          return state;

        default:
          return state;
    }
  }

export default quotes;
=======
export default (state = [], action) => {
  return state;
}

export function quotes(state = [], action){
  switch (action.type) {
  case "ADD_QUOTE":
    return [].concat(state, action.payload)
  case "REMOVE_QUOTE":
    let idx = state.cuid()
    return [].concat(state.slice(0, idx), state.slice(idx - 1, state.length))
  default:
    return state
  }
}


export function voteQuotes(state = [], action){
  switch (action.type) {
  case "UPVOTE_QUOTE":
    return [].concat(state, action.payload)
  case "DOWNVOTE_QUOTE":
    let idx = state.cuid()
    return [].concat(state.slice(0, idx), state.slice(idx - 1, state.length))
  default:
    return state
  }
}

export function combineReducers(reducers){
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key)=>{
        nextState[key] = reducers[key](state[key], action);
        return nextState
      }, {}
    )
  }
}
>>>>>>> 6eff75e5e1b26e968924573fa8595f3ecefa5d01
