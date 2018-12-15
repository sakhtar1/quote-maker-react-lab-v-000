import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
<<<<<<< HEAD
    author: '',
    content: '',
    votes: 0,
=======
    author:'',
    content: ''
>>>>>>> 6eff75e5e1b26e968924573fa8595f3ecefa5d01
  }

  handleOnChange = event => {
    this.setState({
<<<<<<< HEAD
  			[event.target.name]: event.target.value
=======
  			state: event.target.value
>>>>>>> 6eff75e5e1b26e968924573fa8595f3ecefa5d01
  		});
  }

  handleOnSubmit = event => {
    event.preventDefault();
<<<<<<< HEAD
    this.props.addQuote({content: this.state.content, author: this.state.author});
    this.setState({
      author: '',
      content: '',
      id: uuid()
=======
    this.props.addQuote(this.state);
    this.setState({
      author:'',
      content: ''
>>>>>>> 6eff75e5e1b26e968924573fa8595f3ecefa5d01
  		});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
<<<<<<< HEAD
                        name="content"
=======
>>>>>>> 6eff75e5e1b26e968924573fa8595f3ecefa5d01
                        onChange={this.handleOnChange}
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">

                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
<<<<<<< HEAD
                        name="author"
=======
>>>>>>> 6eff75e5e1b26e968924573fa8595f3ecefa5d01
                        onChange={this.handleOnChange}
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(null, { addQuote })(QuoteForm);
