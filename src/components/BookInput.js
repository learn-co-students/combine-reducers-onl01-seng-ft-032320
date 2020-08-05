import React, { Component } from 'react';
import { addBook } from '../actions';
import uuid from 'uuid';
import { connect } from 'react-redux';

export class BookInput extends Component {

  state = {
    title: '',
    authorName: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleOnSubmit = event => {
    event.preventDefault();
    const book = {...this.state, id: uuid() };
    debugger
    this.props.addBook(book);
    this.setState({
      title: '',
      authorName: ''
    });
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="title"
            value={this.state.title}
            placeholder="book title" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="authorName"
            value={this.state.authorName}
            placeholder="author name" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addBook: (book) => {
      dispatch(addBook(book)) //addBook is the action
    }
  }
}

// this is what addBook return and is the actions index file
// export const addBook = book => {
//   return {
//     type: 'ADD_BOOK',
//     book
//   };
// };


export default connect(null, mapDispatchToProps)(BookInput);

// when this.props.addBook(book) gets hit the dispatch is call with teh action
// mention above which in turns calls the reducer. Just know the reducer is smart enought 
// to know that as long as the Action Type matches regarding witch reducer it is the reducer will be enter