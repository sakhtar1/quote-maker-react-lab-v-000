export function addQuote(quote){
  return {
    type: "ADD_QUOTE",
    quote: quote
  }
}


export function removeQuote(quote){
  return {
    type: "REMOVE_QUOTE",
<<<<<<< HEAD
    quoteId: quote
=======
    quote: quote
>>>>>>> 6eff75e5e1b26e968924573fa8595f3ecefa5d01
  }
}


export function upvoteQuote(quote){
  return {
    type: "UPVOTE_QUOTE",
    quoteId: quote
  }
}




export function downvoteQuote(quote){

  return {
    type: "DOWNVOTE_QUOTE",
    quoteId: quote
  }
}
