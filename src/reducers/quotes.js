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
