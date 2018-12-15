import React, { Component } from 'react';
import QuoteForm from './containers/QuoteForm';
<<<<<<< HEAD
import Quotes from './containers/Quotes';
=======
import Quote from './containers/Quote';
>>>>>>> 6eff75e5e1b26e968924573fa8595f3ecefa5d01

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm />
<<<<<<< HEAD
        <Quotes />
=======
        <Quote />
>>>>>>> 6eff75e5e1b26e968924573fa8595f3ecefa5d01
      </div>
    );
  }
}

export default App;
